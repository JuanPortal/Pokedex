import React, { useEffect, useState } from 'react'
import { getPokemon } from './getPokemon'
import { Stats } from './Stats'
import { Types } from './Types'

export const Card = ({ pokemonName }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getPokemon(pokemonName).then(mon => setPokemon(mon))
    }, [pokemonName])
    // getPokemon(pokemonName).then(mon => setPokemon(mon))

    return (
        <div className='card'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt='sprite'></img>
            <Types types={pokemon.types} />
            {/* <Stats pokemon={pokemon} /> */}
        </div>
    )
}
