package de.elurz.nim.model

import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

data class GameMove(@NotNull val pinsTaken: Int, @NotNull @NotBlank val actor: Actor) {
    init {
        when  {
            pinsTaken < 1 -> throw RuntimeException("Pins must not be lower than 1.")
            pinsTaken > 3 -> throw RuntimeException("Pins must not be lager than 3.")
         }
    }
}