package de.elurz.nim.strategy

import de.elurz.nim.strategy.GameStrategy
import de.elurz.nim.strategy.RandomPick
import de.elurz.nim.strategy.SmartPick
import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.Test

class GameStrategyTest {

    @Test
    fun from_abr_test_rng(){
        val strategy: GameStrategy? = GameStrategy.fromAbr("rng")
        MatcherAssert.assertThat(strategy, CoreMatchers.`is`(RandomPick as GameStrategy))
    }

    @Test
    fun from_abr_test_smrt(){
        val strategy: GameStrategy? = GameStrategy.fromAbr("smrt")
        MatcherAssert.assertThat(strategy, CoreMatchers.`is`(SmartPick as GameStrategy))
    }

    @Test
    fun from_abr_test_null(){
        val strategy: GameStrategy? = GameStrategy.fromAbr("bla")
        MatcherAssert.assertThat(strategy, CoreMatchers.nullValue())
    }
}