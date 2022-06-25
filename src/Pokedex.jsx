import React, { useState } from 'react'
import { Container } from './components/Container'
import { SearchBar } from './components/SearchBar'
import { fetchPokemon } from './helpers/fetchPokemon'

export const Pokedex = () => {

    const [pokemonName, setPokemonName] = useState(['charizard'])

    const onNewPokemon = newPokemon => setPokemonName(newPokemon)

    return (
        <>
            <header>
                <h1>Pokedex</h1>
            </header>

            <section>
                <SearchBar onNewPokemon={onNewPokemon} />

                <Container pokemonName={pokemonName} />
            </section>
        </>
    )
}
