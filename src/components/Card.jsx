import React from 'react'

export const Card = ({ pokemon }) => {
    return (
        <>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.shinySprite} />
            <div className='types'>
                {
                    pokemon.types.map(type => {
                        return <p key={type}>{type}</p>
                    })
                }
            </div>
        </>
    )
}
