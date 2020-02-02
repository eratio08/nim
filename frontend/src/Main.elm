module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (alt, class, title)
import Html.Events exposing (onClick)
import Http
import Json.Decode exposing (Decoder, andThen, bool, fail, int, list, nullable, string, succeed)
import Json.Decode.Pipeline exposing (required)
import Json.Encode as Encode


main : Program String Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { backendUrl : String
    , view : View
    , problems : List String
    }


initialModel : String -> Model
initialModel backendUrl =
    { backendUrl = backendUrl
    , view = Games []
    , problems = []
    }


type View
    = Games (List Game)
    | SingleGame Game


viewToStr : View -> String
viewToStr v =
    case v of
        Games _ ->
            "Games"

        SingleGame game ->
            "Game " ++ game.id


type Actor
    = Computer
    | Player


actorFromString : String -> Maybe Actor
actorFromString str =
    case str of
        "PLAYER" ->
            Just Player

        "COMPUTER" ->
            Just Computer

        _ ->
            Nothing


actorToString : Actor -> String
actorToString actor =
    case actor of
        Player ->
            "PLAYER"

        Computer ->
            "COMPUTER"


actorDecoder : Decoder Actor
actorDecoder =
    let
        failMsg str =
            fail <| "Could not parser actor from " ++ str

        strDecode str =
            actorFromString str
                |> Maybe.map succeed
                |> Maybe.withDefault (failMsg str)
    in
    string |> andThen strDecode


type GameStrategy
    = Random
    | Smart


gameStrategyFromString : String -> Maybe GameStrategy
gameStrategyFromString str =
    case str of
        "RandomPick" ->
            Just Random

        "SmartPick" ->
            Just Smart

        _ ->
            Nothing


gameStrategyToString : GameStrategy -> String
gameStrategyToString strategy =
    case strategy of
        Random ->
            "RandomPick"

        Smart ->
            "SmartPick"


gameStrategyDecoder : Decoder GameStrategy
gameStrategyDecoder =
    let
        failMsg str =
            fail <| "Could not parser game strategy from " ++ str

        decodeStr str =
            gameStrategyFromString str
                |> Maybe.map succeed
                |> Maybe.withDefault (failMsg str)
    in
    string |> andThen decodeStr


type alias Move =
    { pinsTaken : Int
    , actor : Actor
    }


moveDecoder : Decoder Move
moveDecoder =
    succeed Move
        |> required "pinsTaken" int
        |> required "actor" actorDecoder


moveHistoryDecoder : Decoder (List Move)
moveHistoryDecoder =
    list moveDecoder


moveEncoder : Move -> Encode.Value
moveEncoder move =
    Encode.object
        [ ( "pinsTaken", Encode.int move.pinsTaken )
        , ( "actor", Encode.string <| actorToString move.actor )
        ]


type alias Id =
    String


type alias Game =
    { moveHistory : List Move
    , gameStrategy : GameStrategy
    , id : Id
    , currentPins : Int
    , currentActor : Maybe Actor
    , gameFinished : Bool
    }


gameDecoder : Decoder Game
gameDecoder =
    succeed Game
        |> required "moveHistory" moveHistoryDecoder
        |> required "gameStrategy" gameStrategyDecoder
        |> required "id" string
        |> required "currentPins" int
        |> required "currentActor" (nullable actorDecoder)
        |> required "gameFinished" bool


gamesDecoder : Decoder (List Game)
gamesDecoder =
    list gameDecoder



-- INIT


init : String -> ( Model, Cmd Msg )
init backendBaseUrl =
    let
        model =
            initialModel backendBaseUrl

        cmd =
            getGames model.backendUrl
    in
    ( model, cmd )



-- UPDATE


type Msg
    = SwitchViewTo View
    | StartNewGame
    | GotGames (Result Http.Error (List Game))
    | GotGame (Result Http.Error Game)
    | MakeMove Move Id
    | GotMove Id (Result Http.Error Move)
    | DeleteGame Id
    | GameDeleted (Result Http.Error ())


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SwitchViewTo (Games games) ->
            ( { model | view = Games games }, getGames model.backendUrl )

        SwitchViewTo v ->
            ( { model | view = v }, Cmd.none )

        StartNewGame ->
            ( model, starteGame model.backendUrl Smart )

        GotGames (Ok games) ->
            ( { model | view = Games games }, Cmd.none )

        GotGames (Err error) ->
            ( { model | problems = [ httpErrorToString error ] }, Cmd.none )

        GotGame (Ok game) ->
            ( { model | view = SingleGame game }, Cmd.none )

        GotGame (Err error) ->
            ( { model | problems = [ httpErrorToString error ] }, Cmd.none )

        MakeMove move id ->
            ( model, makeMove model.backendUrl id move )

        GotMove id (Ok _) ->
            ( model, getGame model.backendUrl id )

        GotMove _ (Err error) ->
            ( { model | problems = [ httpErrorToString error ] }, Cmd.none )

        GameDeleted (Ok _) ->
            ( model, getGames model.backendUrl )

        GameDeleted (Err error) ->
            ( { model | problems = [ httpErrorToString error ] }, Cmd.none )

        DeleteGame id ->
            ( model, deleteGame model.backendUrl id )


httpErrorToString : Http.Error -> String
httpErrorToString error =
    case error of
        Http.BadUrl str ->
            "BasUrl " ++ str

        Http.Timeout ->
            "Timeout"

        Http.NetworkError ->
            "Network Error"

        Http.BadStatus status ->
            "Bad Status " ++ String.fromInt status

        Http.BadBody msg ->
            "Bad Body " ++ msg



--  SUBS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- CMD


getGames : String -> Cmd Msg
getGames baseUrl =
    Http.get
        { url = baseUrl ++ "/nim-games"
        , expect = Http.expectJson GotGames gamesDecoder
        }


getGame : String -> Id -> Cmd Msg
getGame baseUrl id =
    Http.get
        { url = baseUrl ++ "/nim-games/" ++ id
        , expect = Http.expectJson GotGame gameDecoder
        }


starteGame : String -> GameStrategy -> Cmd Msg
starteGame baseUrl strategy =
    let
        gs =
            case strategy of
                Random ->
                    "rnd"

                Smart ->
                    "smrt"
    in
    Http.post
        { url = baseUrl ++ "/nim-games?gs=" ++ gs
        , body = Http.emptyBody
        , expect = Http.expectJson GotGame gameDecoder
        }


deleteGame : String -> Id -> Cmd Msg
deleteGame baseUrl id =
    Http.request
        { method = "DELETE"
        , headers = []
        , url = baseUrl ++ "/nim-games/" ++ id
        , expect = Http.expectWhatever GameDeleted
        , body = Http.emptyBody
        , timeout = Nothing
        , tracker = Nothing
        }


makeMove : String -> Id -> Move -> Cmd Msg
makeMove baseUrl id move =
    Http.post
        { url = baseUrl ++ "/moves?gid=" ++ id
        , body = Http.jsonBody (moveEncoder move)
        , expect = Http.expectJson (GotMove id) moveDecoder
        }



--  VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "Nim Game"
    , body =
        [ section [ class "section" ]
            [ div [ class "container" ]
                [ h1 [ class "title" ] [ text "Nim Game" ]
                , p [ class "subtitle" ] [ text "Coding Assesment" ]
                , viewBreadcrumb
                , renderView model.view
                ]
            , div
                [ class "container" ]
                (viewProblems model.problems)
            ]
        ]
    }


viewProblems : List String -> List (Html Msg)
viewProblems problems =
    List.map text problems


viewBreadcrumb : Html Msg
viewBreadcrumb =
    nav [ class "breadcrumb is-right" ]
        [ ul []
            [ li []
                [ a [ onClick (SwitchViewTo (Games [])), class "is-active" ]
                    [ text "Games" ]
                ]
            ]
        ]


viewBox : String -> Html Msg -> Html Msg
viewBox title content =
    div [ class "box" ]
        [ h2 [ class "title" ] [ text title ]
        , div [ class "content" ] [ content ]
        ]


renderView : View -> Html Msg
renderView v =
    case v of
        Games games ->
            viewBox "Games" (viewGames games)

        SingleGame game ->
            viewBox ("Game " ++ game.id) (viewGame game)


viewGames : List Game -> Html Msg
viewGames games =
    div [ class "container" ]
        [ table
            [ class "table is-hoverable" ]
            [ thead []
                [ tr []
                    [ th []
                        [ abbr [ title "Id" ] [ text "Id" ]
                        ]
                    , th []
                        [ abbr [ title "Finished" ]
                            [ text "Has Finished"
                            ]
                        ]
                    , th []
                        [ abbr [ title "Remaining Pins" ]
                            [ text "Pins"
                            ]
                        ]
                    , th []
                        [ abbr [ title "Current Actor" ]
                            [ text "Actor"
                            ]
                        ]
                    , th []
                        [ abbr [ title "Actions" ]
                            [ text "Actions"
                            ]
                        ]
                    ]
                ]
            , tbody [] (List.map viewGameRow games)
            ]
        , tfoot [] [ viewAddGameRow ]
        ]


viewAddGameRow : Html Msg
viewAddGameRow =
    tr []
        [ td []
            []
        , td [] []
        , td [] []
        , td [] []
        , td []
            [ button
                [ class "button is-info", onClick StartNewGame ]
                [ text "Start New Game" ]
            ]
        ]


boolToString : Bool -> String
boolToString b =
    if b == True then
        "true"

    else
        "false"


viewGameRow : Game -> Html Msg
viewGameRow game =
    tr []
        [ td [] [ text game.id ]
        , td []
            [ text <| boolToString game.gameFinished
            ]
        , td [] [ text <| String.fromInt game.currentPins ]
        , td []
            [ Maybe.map actorToString game.currentActor
                |> Maybe.withDefault "no actor yes"
                |> text
            ]
        , td []
            [ span
                [ class "icon" ]
                [ a [ onClick (SwitchViewTo (SingleGame game)), alt "View" ]
                    [ i [ class "fas fa-list" ] []
                    ]
                ]
            , span
                [ class "icon has-text-danger" ]
                [ a
                    [ onClick (DeleteGame game.id) ]
                    [ i [ class "fas fa-ban", alt "Delete" ] []
                    ]
                ]
            ]
        ]


viewGame : Game -> Html Msg
viewGame game =
    div []
        [ div
            [ class "content" ]
            [ table [ class "table is-narrow" ]
                [ tr []
                    [ td [] [ strong [] [ text "Current Actor" ] ]
                    , td []
                        [ Maybe.map actorToString game.currentActor
                            |> Maybe.withDefault "no Actor yet"
                            |> text
                        ]
                    ]
                , tr []
                    [ td [] [ strong [] [ text "Current Pins" ] ]
                    , td []
                        [ text <| String.fromInt game.currentPins
                        ]
                    ]
                , tr []
                    [ td [] [ strong [] [ text "Gmae Strategy" ] ]
                    , td []
                        [ text <| gameStrategyToString game.gameStrategy
                        ]
                    ]
                ]
            ]
        , div [ class "content" ]
            [ p [ class "title is-2" ] [ text "Move History" ]
            , p [ class "subtitle is-3" ] []
            ]
        , viewMoves game.moveHistory
        , div [ class "content" ]
            [ p [ class "title is-2" ] [ text "Next Move" ]
            , p [ class "subtitle is-3" ] []
            ]
        , div
            [ class "columns is-mobile is-centered" ]
            [ div
                [ class "column  is-2" ]
                [ button
                    [ class "button is-link", onClick (MakeMove (Move 1 Player) game.id) ]
                    [ text "Take 1" ]
                ]
            , div [ class "column  is-2" ]
                [ button
                    [ class "button is-link", onClick (MakeMove (Move 2 Player) game.id) ]
                    [ text "Take 2" ]
                ]
            , div [ class "column is-2" ]
                [ button
                    [ class "button is-link", onClick (MakeMove (Move 3 Player) game.id) ]
                    [ text "Take 3" ]
                ]
            ]
        ]


viewMove : Move -> Html Msg
viewMove move =
    td []
        [ div [ class "box" ]
            [ h2 [] [ text "Pins" ]
            , text <| String.fromInt move.pinsTaken
            , h3 [] [ text "Actor" ]
            , text <| actorToString move.actor
            ]
        ]


viewMoves : List Move -> Html Msg
viewMoves moves =
    let
        renderMoves =
            if List.isEmpty moves then
                [ td [] [ text "no moves yet" ] ]

            else
                List.map viewMove moves
    in
    div [ class "table-container" ]
        [ table []
            [ tr [] renderMoves
            ]
        ]
