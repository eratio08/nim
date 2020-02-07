package de.elurz.nim.controller

import de.elurz.nim.model.NimGame
import de.elurz.nim.service.NimGameStoreService
import de.elurz.nim.strategy.RandomPick
import de.elurz.nim.strategy.SmartPick
import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import io.restassured.http.ContentType
import org.hamcrest.CoreMatchers.`is`
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import javax.inject.Inject

/**
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
@QuarkusTest
class GameControllerTest {

    @Inject
    lateinit var gameStoreService: NimGameStoreService

    @BeforeEach
    fun beforeEach() {
        gameStoreService.clear()
    }

    @Test
    @DisplayName("Should start a new game with a random game strategy and user having the first turn.")
    fun should_start_game() {
        given()
                .queryParam("gs", "rng")
                .`when`()
                .post("/nim-games")
                .then()
                .statusCode(201)
                .contentType(ContentType.JSON)
                .body("gameStrategy", `is`("RandomPick"))
                .body("moveHistory.size()", `is`(0))
    }

    @Test
    @DisplayName("Should start a new game with a smart game strategy and user having the first turn.")
    fun should_start_game_with_smart_strategy() {
        given()
                .queryParam("gs", "smrt")
                .`when`()
                .post("/nim-games")
                .then()
                .statusCode(201)
                .contentType(ContentType.JSON)
                .body("gameStrategy", `is`("SmartPick"))
                .body("moveHistory.size()", `is`(0))
    }

    @Test
    @DisplayName("Should retrieve a game by game id.")
    fun should_get_a_game_by_id() {
        val game = NimGame(gameStrategy = RandomPick)
        gameStoreService.put(game.id, game)
        given().pathParam("id", game.id)
                .`when`()
                .get("/nim-games/{id}")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("moveHistory.size()", `is`(0))
                .body("gameStrategy", `is`(game.getGameStrategyName()))
                .body("id", `is`(game.id))
    }

    @Test
    @DisplayName("Should retrieve all games.")
    fun should_get_all_games() {
        val game1 = NimGame(gameStrategy = RandomPick)
        val game2 = NimGame(gameStrategy = SmartPick)
        gameStoreService.put(game1.id, game1)
        gameStoreService.put(game2.id, game2)
        given()
                .`when`()
                .get("/nim-games")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("size()", `is`(2))
    }

    @Test
    @DisplayName("Should remove a game by game id.")
    fun should_remove_a_game_by_id() {
        var game = NimGame(gameStrategy = RandomPick)
        gameStoreService.put(game.id, game)
        given().pathParam("id", game.id)
                .`when`()
                .delete("/nim-games/{id}")
                .then()
                .statusCode(204)
    }
}
        
