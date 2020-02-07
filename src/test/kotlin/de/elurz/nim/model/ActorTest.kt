package de.elurz.nim.model

import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test


/**
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
internal class ActorTest {

    @Test
    @DisplayName("Should parse a player actor from a given string.")
    fun should_parse_a_player_actor_from_the_given_string() {
        val match = Actor.fromAbr("plr")
        MatcherAssert.assertThat(match, CoreMatchers.`is`(Actor.PLAYER))
    }

    @Test
    @DisplayName("Should parse a computer actor from a given string.")
    fun should_parse_a_computer_actor_from_a_given_string() {
        val match: Actor? = Actor.fromAbr("cmp")
        MatcherAssert.assertThat(match, CoreMatchers.`is`(Actor.COMPUTER))
    }
}
