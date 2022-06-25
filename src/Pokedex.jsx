import React, { useState } from 'react'
import { Container } from './components/Container'
import { SearchBar } from './components/SearchBar'

export const Pokedex = () => {

    const [pokemonName, setPokemonName] = useState(['charizard'])

    const onAddPokemon = newPokemon => setPokemonName(newPokemon)

    return (
        <>
            <header>
                <h1>Pokedex</h1>
            </header>

            <section>
                <SearchBar onNewPokemon={onAddPokemon} />

                <Container pokemonName={pokemonName} />
            </section>
        </>
    )
}
