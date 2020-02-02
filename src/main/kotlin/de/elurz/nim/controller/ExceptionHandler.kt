package de.elurz.nim.controller

import javax.ws.rs.core.Response
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider

@Provider
class ExceptionHandler : ExceptionMapper<NimGameException> {

    override fun toResponse(exception: NimGameException?): Response {
        return exception?.let { Response.status(it.status).entity(Error(it.status, it.code, it.msg)).build() }
                ?: Response.status(500).entity("Internal Server Error").build()
    }

}
