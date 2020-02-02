package de.elurz.nim.model

import org.hamcrest.MatcherAssert.assertThat
import org.hamcrest.Matchers
import org.hamcrest.Matchers.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows

internal class NimGameTest {
    lateinit var testSubject: NimGame
    val finishedGame = NimGame(listOf(GameMove(3, Actor.COMPUTER),
                                      GameMove(3, Actor.PLAYER),
                                      GameMove(3, Actor.COMPUTER),
                                      GameMove(3, Actor.PLAYER),
                                      GameMove(1, Actor.COMPUTER)))

    @BeforeEach
    fun beforeEach() {
        testSubject = NimGame(listOf(GameMove(3, Actor.COMPUTER), GameMove(3, Actor.PLAYER)));
    }

    @Test
    @DisplayName("Should return the current pin count.")
    fun should_return_the_current_pin_count_of_7() {
        assertThat(testSubject.getCurrentPins(), `is`(7))
    }

    @Test
    fun should_return_the_game_is_not_finished() {
        assertThat(testSubject.isGameFinished(), `is`(false))
    }

    @Test
    fun should_return_the_game_has_finished() {
        testSubject = finishedGame
        assertThat(testSubject.isGameFinished(), `is`(true))
    }

    @Test
    fun should_return_the_current_actor_player() {
        assertThat(testSubject.getCurrentActor(), `is`(Actor.PLAYER))
    }

    @Test
    fun should_make_a_valid_move_by_the_player_taking_3_pins() {
        val move = GameMove(3, Actor.COMPUTER)
        val game = testSubject.makeMove(move)
        assertThat(game.moveHistory.last(), `is`(equalTo(move)))
    }

    @Test
    fun should_make_a_move_on_a_finished_game_with_no_effect() {
        testSubject=finishedGame
        val move = GameMove(3, Actor.COMPUTER)
        val game = testSubject.makeMove(move)
        assertThat(game.moveHistory.last(), `is`(not(equalTo(move))))
    }

    @Test
    fun should_make_an_invalid_move_by_two_moves_of_the_same_actor_and_fail() {
        val move = GameMove(3, Actor.PLAYER)
        val exception = assertThrows<RuntimeException> { testSubject.makeMove(move) }
        assertThat(exception.message, Matchers.startsWith("One actor must not make two moves successively."))
    }

    @Test
    fun should_make_an_invalid_move_by_taken_more_pins_as_available() {
        testSubject = NimGame(listOf(GameMove(3, Actor.COMPUTER),
                                     GameMove(3, Actor.PLAYER),
                                     GameMove(3, Actor.COMPUTER),
                                     GameMove(3, Actor.PLAYER)))
        val move = GameMove(3, Actor.COMPUTER)
        val exception = assertThrows<RuntimeException> { testSubject.makeMove(move) }
        assertThat(exception.message, Matchers.startsWith("This move takes more pins"))
    }
}
