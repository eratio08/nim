package de.elurz.nim.service

import de.elurz.nim.model.Actor
import de.elurz.nim.model.GameMove
import de.elurz.nim.model.NimGame
import de.elurz.nim.strategy.SmartPick
import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers.`is`
import org.hamcrest.Matchers.lessThan
import org.junit.jupiter.api.Test

/**
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
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

    @Test
    fun should_finish_a_game_move_with_the_player_moving_last() {
        val game = NimGame(listOf(GameMove(3, Actor.PLAYER),
                                  GameMove(3, Actor.COMPUTER),
                                  GameMove(3, Actor.PLAYER),
                                  GameMove(3, Actor.COMPUTER)), SmartPick)
        val newGame = testSubject.play(game, GameMove(1, Actor.PLAYER));
        assertThat(newGame.getCurrentPins(), `is`(lessThan(13 - 3 - 3 - 3 - 3)))
        assertThat(newGame.getCurrentActor(), `is`(Actor.PLAYER))
    }

    @Test
    fun should_finish_a_game_move_with_the_computer_moving_last() {
        val game = NimGame(listOf(GameMove(3, Actor.COMPUTER),
                                  GameMove(3, Actor.PLAYER),
                                  GameMove(3, Actor.COMPUTER),
                                  GameMove(3, Actor.PLAYER)), SmartPick)
        val newGame = testSubject.play(game, GameMove(1, Actor.PLAYER));
        assertThat(newGame.getCurrentPins(), `is`(lessThan(13 - 3 - 3 - 3 - 3)))
        assertThat(newGame.getCurrentActor(), `is`(Actor.COMPUTER))
    }

    @Test
    fun should_finish_a_game() {
        val game = NimGame(listOf(), SmartPick)
        val step1 = testSubject.play(game, GameMove(1, Actor.PLAYER));
        val step2 = testSubject.play(step1, GameMove(1, Actor.PLAYER));
        val step3 = testSubject.play(step2, GameMove(1, Actor.PLAYER));
        val step4 = testSubject.play(step3, GameMove(1, Actor.PLAYER));
        val step5 = testSubject.play(step4, GameMove(1, Actor.PLAYER));
        assertThat(step5.getCurrentPins(), `is`(lessThan(13 - 1 - 1 - 1 - 1)))
        assertThat(step5.getCurrentActor(), `is`(Actor.PLAYER))
        assertThat(step5.isGameFinished(), `is`(true))
    }



}
