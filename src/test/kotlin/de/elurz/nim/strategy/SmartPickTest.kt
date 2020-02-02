package de.elurz.nim.strategy

import org.hamcrest.MatcherAssert
import org.hamcrest.Matchers
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.MethodSource
import org.junit.jupiter.params.provider.ValueSource
import java.util.stream.Stream

internal class SmartPickTest {

    private val testSubject = SmartPick;

    @ParameterizedTest
    @MethodSource("testSetProvider")
    fun should_compute_pins_smartly(set: Pair<Int, Int>) {
        val (pins, pinsToTake) = set
        MatcherAssert.assertThat(testSubject.computePins(pins), Matchers.`is`(pinsToTake))

    }

    companion object {
        @JvmStatic
        fun testSetProvider(): Stream<Pair<Int, Int>> {
            return Stream.of(Pair(13, 1), // loose
                             Pair(12, 3),
                             Pair(11, 2),
                             Pair(10, 1),
                             Pair(9, 1), // loose
                             Pair(8, 3),
                             Pair(7, 2),
                             Pair(6, 1),
                             Pair(5, 1), // loose
                             Pair(4, 3),
                             Pair(3, 2),
                             Pair(2, 1),
                             Pair(1, 1), // loose
                             Pair(0, 0)
                            )
        }
    }

}