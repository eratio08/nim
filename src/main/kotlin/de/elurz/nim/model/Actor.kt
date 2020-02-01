package de.elurz.nim.model

/**
 * Actor of a State.
 * @see State
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