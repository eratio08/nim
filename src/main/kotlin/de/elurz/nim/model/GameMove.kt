package de.elurz.nim.model

import de.elurz.nim.controller.NimGameException
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

/**
 * A move in a NimGame.
 * @see NimGame
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
data class GameMove(@NotNull val pinsTaken: Int, @NotNull @NotBlank val actor: Actor) {
    init {
        when {
            pinsTaken < 1 -> throw NimGameException("Pins must not be lower than 1.", "pins_invalid_low")
            pinsTaken > 3 -> throw NimGameException("Pins must not be lager than 3.", "pins_invalid_high")
        }
    }
}
