package de.elurz.nim.service

import de.elurz.nim.model.NimGame
import javax.inject.Singleton

/**
 * In memory store for nim games.
 * @author Eike Lurz <eike.lurz@tuta.io>
 * @see NimGame
 */
@Singleton
class NimGameStoreService {
    private val store: MutableMap<String, NimGame> = HashMap<String, NimGame>()

    fun put(key: String, value: NimGame): NimGame? =
            store.put(key, value)

    fun remove(key: String): NimGame? =
            this.store.remove(key)

    operator fun get(key: String): NimGame? =
            this.store[key]

    fun values(): Collection<NimGame> =
            this.store.values

    fun clear() =
            this.store.clear()

}
