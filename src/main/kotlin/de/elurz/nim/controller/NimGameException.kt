package de.elurz.nim.controller

/**
 * Exception in the nim game context.
 * @author Eike Lurz <eike.lurz@tuta.io>
 */
class NimGameException(val msg: String, val code: String, val status: Int = 400) : RuntimeException(msg)
