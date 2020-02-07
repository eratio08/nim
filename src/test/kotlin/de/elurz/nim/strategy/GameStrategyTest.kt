package de.elurz.nim.strategy

import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test

/**
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
class GameStrategyTest {

    @Test
    @DisplayName("Should parse a random game strategy from a given string.")
    fun should_parse_from_rng() {
        val strategy: GameStrategy? = GameStrategy.fromAbr("rng")
        MatcherAssert.assertThat(strategy, CoreMatchers.`is`(RandomPick as GameStrategy))
    }

    @Test
    @DisplayName("Should parse a smart game strategy from a given string.")
    fun should_parse_from_smrt() {
        val strategy: GameStrategy? = GameStrategy.fromAbr("smrt")
        MatcherAssert.assertThat(strategy, CoreMatchers.`is`(SmartPick as GameStrategy))
    }

    @Test
    @DisplayName("Should fail parsing a non valid string.")
    fun should_fail_parsing_from_bla() {
        val strategy: GameStrategy? = GameStrategy.fromAbr("bla")
        MatcherAssert.assertThat(strategy, CoreMatchers.nullValue())
    }
}