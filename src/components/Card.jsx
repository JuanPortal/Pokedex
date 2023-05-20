import { Types } from "./Types"

export const Card = ({ pokemon }) => {
    return (
        <>
            <h2>{pokemon.name}</h2>

            <img src={pokemon.shinySprite} title={pokemon.name} alt={pokemon.name} />

            <Types pokemon={pokemon}/>

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
                        {
                            pokemon.stats.map(stat => {
                                return <td key={stat.stat}>{stat.value}</td>
                            })
                        }
                    </tr>
                </tbody>
            </table>

            <div className='abilities'>
                {
                    pokemon.abilities.map(ability => {
                        ability = ability.toString().replace('-', ' ')
                        return <p key={ability}>{ability}</p>
                    })
                }
            </div>

            <div className='mass'>
                <p>Height: {pokemon.height} m</p>
                <p>Weight: {pokemon.weight} kg</p>
            </div>
        </>
    )
}
