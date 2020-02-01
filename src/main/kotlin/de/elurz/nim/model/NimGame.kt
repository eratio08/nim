package de.elurz.nim.model

import com.fasterxml.jackson.annotation.JsonGetter
import de.elurz.nim.strategy.GameStrategy
import de.elurz.nim.strategy.RandomPick
import java.util.*

/**
 * A game of Nim.
 */
data class NimGame(
        val moveHistory: List<GameMove> = mutableListOf(),
        val gameStrategy: GameStrategy = RandomPick,
        val id: String = UUID.randomUUID().toString()) {
    private val initialPins = 13

    /**
     * @return the current pin count
     */
    fun getCurrentPins() : Int =
            moveHistory.asSequence().fold(initialPins, { acc, move -> acc - move.pinsTaken })

    /**
     * @return true, if the no pins can be taken. else false
     */
    fun isGameFinished(): Boolean = getCurrentPins() == 0

    /**
     * @return last actor, might be null
     */
    fun getCurrentActor(): Actor? = moveHistory.lastOrNull()?.actor

    /**
     * Makes a new game move.
     * @param gameMove the new move
     * @return a new NimGame
     * @throws RuntimeException if the new move is not allowed
     * @see GameMove
     */
    fun makeMove(gameMove: GameMove): NimGame {
        if (isGameFinished()) {
            return this;
        }
        isMoveValid(gameMove)?.let { throw it }
        val newGameHistory = listOf(*moveHistory.toTypedArray(), gameMove)
        return this.copy(moveHistory=newGameHistory)
    }

    private fun isMoveValid(gameMove: GameMove): Exception? {
        val lastActor = moveHistory.lastOrNull()?.actor
        val currentPins = getCurrentPins()
        val pinDiff = currentPins - gameMove.pinsTaken
        return when {
            lastActor == gameMove.actor -> RuntimeException("One actor must not make two moves successively.")
            pinDiff < 1                 -> RuntimeException("This move take more pins the actual available. Only $currentPins are available.")
            else                        -> null
        };
    }

    @JsonGetter("gameStrategy")
    fun getGameStrategyName() = gameStrategy.toString()
}

