import React, { useEffect, useState } from 'react'
import { getPokemon } from './getPokemon'
import { Types } from './Types'

export const Card = ({ pokemonName }) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getPokemon(pokemonName).then(mon => setPokemon(mon))
    }, [pokemonName])

    return (
        <div className='card'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt=''></img>
            {/* <div className='types'>
                {
                    pokemon.types.map(type => (
                        <Types type={type} />
                    ))
                }
            </div> */}
            {/* <div className='types'>
                {
                    pokemon.types.map(type => {
                        <p className=''>{type}</p>
                    })
                }
            </div> */}
            {/* {pokemon.types.map(type => {
                <div className='types'>{type}</div>
            })} */}
            {/* {pokemon.abilities.map(ability => {
                <div className='abilities'>{ability}</div>
            })}
            {pokemon.stats.map(stat => {
                <div className='stats'>{stat}</div>
            })} */}
        </div>
    )
}
