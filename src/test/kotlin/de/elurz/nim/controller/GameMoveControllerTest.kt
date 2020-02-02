package de.elurz.nim.controller

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.model.NimGame
import de.elurz.nim.service.NimGameStoreService
import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import io.restassured.http.ContentType
import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import javax.inject.Inject

@QuarkusTest
internal class GameMoveControllerTest {

    @Inject
    lateinit var gameStoreService: NimGameStoreService;

    @BeforeEach
    fun beforeEach() {
        gameStoreService.clear()
    }

    @Test
    fun should_make_a_game_move_with_computer_moving_last() {
        var game = NimGame()
        gameStoreService.put(game.id, game)
        given()
                .queryParam("gid", game.id)
                .contentType(ContentType.JSON)
                .body(GameMove(3, Actor.PLAYER))
                .`when`()
                .post("/moves")
                .then()
                .statusCode(201)
                .body("pinsTaken", `is`(anyOf(`is`(1), `is`(2), `is`(3))))
                .body("actor", `is`(Actor.COMPUTER.toString()))
        assertThat(gameStoreService[game.id]?.getCurrentPins(), `is`(lessThan(13 - 3)))
    }

    @Test
    fun should_make_a_game_move_with_computer_moving_first() {
        var game = NimGame(listOf(GameMove(3, Actor.PLAYER)))
        gameStoreService.put(game.id, game)
        given()
                .queryParam("gid", game.id)
                .contentType(ContentType.JSON)
                .body(GameMove(3, Actor.PLAYER))
                .`when`()
                .post("/moves")
                .then()
                .statusCode(201)
                .body("pinsTaken", `is`(3))
                .body("actor", `is`(Actor.PLAYER.toString()))
        assertThat(gameStoreService[game.id]?.getCurrentPins(), `is`(lessThan(13 - 3 - 3)))
    }


}
