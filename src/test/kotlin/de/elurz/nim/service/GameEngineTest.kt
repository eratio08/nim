package de.elurz.nim.service

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.model.NimGame
import org.hamcrest.MatcherAssert
import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers
import org.hamcrest.Matchers.*
import org.junit.jupiter.api.Test

internal class GameEngineTest {

    private val testSubject = GameEngine();

    @Test
    fun should_play_a_game_move_with_the_computer_moving_first() {
        val game = NimGame(listOf(GameMove(3, Actor.PLAYER)))
        val newGame = testSubject.play(game, GameMove(3, Actor.PLAYER));
        assertThat(newGame.getCurrentPins(), `is`(lessThan(13 - 3 - 3)))
        assertThat(newGame.getCurrentActor(), `is`(Actor.PLAYER))
    }

    @Test
    fun should_play_a_game_move_with_the_computer_moving_last() {
        val game = NimGame(listOf(GameMove(3, Actor.COMPUTER)))
        val newGame = testSubject.play(game, GameMove(3, Actor.PLAYER));
        assertThat(newGame.getCurrentPins(), `is`(lessThan(13 - 3 - 3)))
        assertThat(newGame.getCurrentActor(), `is`(Actor.COMPUTER))
    }
}