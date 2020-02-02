package de.elurz.nim.controller

class NimGameException(val msg: String, val code: String, val status: Int = 400) : RuntimeException(msg)
