package de.elurz.nim.controller

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.service.GameEngine
import de.elurz.nim.service.NimGameStoreService
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/moves")
class GameMoveController @Inject constructor(val gameStoreService: NimGameStoreService,
                                             val gameEngine: GameEngine) {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun postGameMove(@QueryParam("gid") gameId: String, gameMove: GameMove): Response {
        val game = gameStoreService[gameId] ?: throw RuntimeException("Game not found");
        val newGame = gameEngine.play(game, gameMove);
        println(newGame.getCurrentPins())
        gameStoreService.put(newGame.id, newGame)
        return Response.status(201).entity(newGame.moveHistory.last()).build()
    }

}