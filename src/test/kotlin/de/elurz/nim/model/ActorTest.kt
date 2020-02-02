package de.elurz.nim.model

import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.Test

internal class ActorTest {

    @Test
    fun fromAbrPlayer() {
        val match = Actor.fromAbr("plr")
        MatcherAssert.assertThat(match, CoreMatchers.`is`(Actor.PLAYER))
    }

    @Test
    fun fromAbrComputer() {
        val match: Actor?= Actor.fromAbr("cmp")
        MatcherAssert.assertThat(match, CoreMatchers.`is`(Actor.COMPUTER))
    }
}
