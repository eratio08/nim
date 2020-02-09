package de.elurz.nim.strategy

/**
 * A GameStrategy which will calculate a random number of pins.
 * @see GameStrategy
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
object RandomPick : GameStrategy {

    override fun computePins(remainingPins: Int): Int {
        val randomPins: Int = (Math.random() * 10).toInt() % 3 + 1
        val diff = remainingPins - randomPins
        return if (diff < 0) remainingPins else randomPins
    }

    override fun toString(): String {
        return "RandomPick"
    }
}