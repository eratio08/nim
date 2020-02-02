package de.elurz.nim.controller

import de.elurz.nim.model.NimGame
import de.elurz.nim.service.NimGameStoreService
import de.elurz.nim.strategy.GameStrategy
import de.elurz.nim.strategy.RandomPick
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/nim-games")
class GameController @Inject constructor(val gameStoreService: NimGameStoreService) {

    @POST
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    fun createGame(@QueryParam("gs") gameStrategyAbr: String?): Response {
        val gameStrategy = gameStrategyAbr?.let { GameStrategy.fromAbr(it) } ?: RandomPick
        val nimGame = NimGame(gameStrategy = gameStrategy)
        gameStoreService.put(nimGame.id, nimGame)
        return Response.status(Response.Status.CREATED).type(MediaType.APPLICATION_JSON).entity(nimGame).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun getGame(@PathParam("id") id: String) = gameStoreService[id]

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    fun getGames() = gameStoreService.values()

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun deleteGame(@PathParam("id") id: String): Response {
        return gameStoreService.remove(id)?.let { Response.status(204).build() }
                ?: Response.status(404).entity(Error(404, "game_not_found", "Did not find game")).build()
    }

}
