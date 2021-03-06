package de.elurz.nim.service

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.model.NimGame
import javax.inject.Singleton

/**
 * An engine to play a nim game against the computer.
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
@Singleton
class GameEngine {

    /**
     * Plays a Nim game against the computer.
     */
    fun play(game: NimGame, gameMove: GameMove): NimGame {
        return when (game.getCurrentActor()) {
            Actor.PLAYER -> game.makeMove(buildComputerMove(game)).makeMove(gameMove)
            else -> {
                val newGame = game.makeMove(gameMove)
                val computerMove = buildComputerMove(newGame)
                newGame.makeMove(computerMove)
            }
        }
    }

    private fun buildComputerMove(game: NimGame): GameMove {
        val currentPins = game.getCurrentPins()
        val pinsToTake = game.gameStrategy.computePins(currentPins)
        if (game.isGameFinished()) {
            return game.moveHistory.last()
        }
        return GameMove(pinsToTake, Actor.COMPUTER)
    }

}


