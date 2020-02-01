package de.elurz.nim.strategy

import com.fasterxml.jackson.annotation.JsonGetter

/**
 * A game strategy which tries to be smart calculating the number of pins to take.
 * Will try to force the opponent into a loosing state.
 * Check https://en.wikipedia.org/wiki/Nim
 * @see GameStrategy
 */
object SmartPick : GameStrategy {
    override fun computePins(remainingPins: Int): Int {
        return 1
    }

    @JsonGetter("name")
    override fun toString(): String {
        return "SmartPick"
    }
}