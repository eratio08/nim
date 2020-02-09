package de.elurz.nim.strategy


/**
 * A game strategy used by the computer to calculate the number of pins to take in the next state of a game.
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
interface GameStrategy {

    /**
     * Computes the bin to take in the next game move.
     * @param remainingPins the remaining pins
     * @return pins to take in the next game move
     */
    fun computePins(remainingPins: Int): Int


    companion object {
        /**
         * Retrieves a game strategy by it's abbreviation.
         * @param abr the abbreviation
         * @return GameStrategy
         */
        @JvmStatic
        fun fromAbr(abr: String): GameStrategy? = when (abr) {
            "rng" -> RandomPick
            "smrt" -> SmartPick
            else -> null
        }
    }
}

