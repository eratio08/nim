package de.elurz.nim.strategy

/**
 * A game strategy which tries to be smart calculating the number of pins to take.
 * Will try to force the opponent into a loosing state.
 * Check https://en.wikipedia.org/wiki/Nim
 * @see GameStrategy
 */
object SmartPick : GameStrategy {

    override fun computePins(remainingPins: Int): Int {
        val take = remainingPins % 4
        return when {
            remainingPins == 0 -> 0
            take == 0          -> 3
            take == 3          -> 2
            take == 2          -> 1
            else               -> take
        }
    }

    override fun toString(): String {
        return "SmartPick"
    }
}