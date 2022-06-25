export const Card = ({ pokemon }) => {
    // console.log(pokemon)
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
