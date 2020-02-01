package de.elurz.nim.service

import de.elurz.nim.model.NimGame
import javax.inject.Singleton

@Singleton
class NimGameStoreService() {
    private val store: MutableMap<String, NimGame> = HashMap<String, NimGame>()

    fun put(key: String, value: NimGame): NimGame? {
        return store.put(key, value);
    }

    fun remove(key: String): NimGame? {
        return this.store.remove(key)
    }

    operator fun get(key: String): NimGame? {
        return this.store[key]
    }

    fun values(): Collection<NimGame> {
        return this.store.values;
    }

    fun clear() {
        this.store.clear()
    }
}