import React from 'react'

export const Stats = ({ pokemon }) => {
    console.log(pokemon.stats)
    return (
        <table>
            <thead>
                <tr>
                    <th>HP</th>
                    <th>Atk</th>
                    <th>Def</th>
                    <th>SpA</th>
                    <th>SpD</th>
                    <th>Spe</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{pokemon.stats[0].value}</td>
                    <td>{pokemon.stats[1].value}</td>
                    <td>{pokemon.stats[2].value}</td>
                    <td>{pokemon.stats[3].value}</td>
                    <td>{pokemon.stats[4].value}</td>
                    <td>{pokemon.stats[5].value}</td>
                </tr>
            </tbody>
        </table>
        // <div>{pokemon.stats[0].value}</div>

    )
}
