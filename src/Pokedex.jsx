import React, { useState } from 'react'
import { Container } from './components/Container'
import { SearchBar } from './components/SearchBar'
import { fetchPokemon } from './helpers/fetchPokemon'

export const Pokedex = () => {
    
    const [pokemonName, setPokemonName] = useState(['unown'])

    const onNewPokemon = newPokemon => setPokemonName(newPokemon)

    return (
        <>
            <h1>Pokedex</h1>

            {/* <SearchBar onNewPokemon={onNewPokemon} /> */}
            {fetchPokemon('Pikachu')}
            {/* <Container pokemonName={pokemonName} /> */}
        </>
    )
}
