package de.elurz.nim.strategy

import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.anyOf
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.RepeatedTest
import org.junit.jupiter.api.Test

/**
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
internal class RandomPickTest {
    private val testSubject = RandomPick

    @Test
    @DisplayName("Should compute a random number of pins between 1 and 3.")
    fun should_compute_random_pins(){
        val randomPins = testSubject.computePins(13)
        assertThat(randomPins, `is`(anyOf(`is`(1), `is`(2), `is`(3))))
    }

    @Test
    @DisplayName("Should compute 1 if 1 pin is remaining.")
    @RepeatedTest(100)
    fun should_compute_random_pins_with_1_remaining_pin(){
        val randomPins = testSubject.computePins(1)
        assertThat(randomPins, `is`(1))
    }

    @Test
    @DisplayName("Should compute 1 or 2 if 2 pin are remaining.")
    fun should_compute_random_pins_with_2_remaining_pins(){
        val randomPins = testSubject.computePins(1)
        assertThat(randomPins, `is`(anyOf(`is`(1), `is`(2))))
    }
}
