package de.elurz.nim.model

/**
 * Actor of a game move.
 * @see GameMove
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
enum class Actor(val abr: String) {
    PLAYER("plr"),
    COMPUTER("cmp");

    companion object {
        @JvmStatic
        fun fromAbr(
                abr: String): Actor? = values().asSequence().filter { it.abr == abr }.firstOrNull()
    }
}