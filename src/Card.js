import React from 'react'
import { getPokemon } from './getPokemon'

export const Card = () => {
    console.log(getPokemon('pikachu'));
    return (
        <div className='card'>
            <h2>Charizard</h2>
            <img src='' alt=''></img>
            <div className='types'></div>
            <div className='abilities'></div>
            <div className='stats'></div>
        </div>
    )
}
