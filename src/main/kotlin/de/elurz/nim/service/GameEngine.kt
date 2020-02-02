package de.elurz.nim.service

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.model.NimGame
import javax.inject.Singleton

@Singleton
class GameEngine {

    /**
     * Plays a Nim game against the computer.
     */
    fun play(game: NimGame, gameMove: GameMove): NimGame {
        return when (game.getCurrentActor()) {
            Actor.PLAYER -> game.makeMove(buildComputerMove(game)).makeMove(gameMove)
            else         -> game.makeMove(gameMove).makeMove(buildComputerMove(game))
        }
    }

    private fun buildComputerMove(game: NimGame): GameMove {
        val currentPins = game.getCurrentPins()
        val pinsToTake = game.gameStrategy.computePins(currentPins)
        if(game.isGameFinished()) {
            return game.moveHistory.last()
        }
        return GameMove(pinsToTake, Actor.COMPUTER)
    }

}


