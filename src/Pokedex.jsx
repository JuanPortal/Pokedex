import React, { useState } from 'react'
import { Container } from './components/Container'
import { SearchBar } from './components/SearchBar'

export const Pokedex = () => {

    const [pokemonName, setPokemonName] = useState(['charizard'])

    const onAddPokemon = newPokemon => setPokemonName(newPokemon)

    return (
        <main>
            <section>
                <header>
                    <h1>Pokedex</h1>
                </header>

                <SearchBar onNewPokemon={onAddPokemon} />
            </section>

            <section>
                <Container pokemonName={pokemonName} />
            </section>
        </main>
    )
}
