export const Types = ({ pokemon }) => {

    const typeColors = {
        bug: '#a5b51b',
        dark: '#543d30',
        dragon: '#7460df',
        electric: '#fbbb18',
        fairy: '#f4b0f4',
        fighting: '#7f331b',
        fire: '#ea3b0b',
        flying: '#95a9f2',
        ghost: '#5c5cac',
        grass: '#6dbf31',
        ground: '#d4b058',
        ice: '#6fd6f3',
        normal: '#c4beb5',
        poison: '#914493',
        psychic: '#e9457f',
        rock: '#bba357',
        steel: '#8f8e9e',
        water: '#0e68c4'
    }

    return (
        <div className='types'>
            {
                pokemon.types.map(type => {
                    // console.log(typeColors.type)
                    // return <p style={{backgroundColor: typeColors.type}} key={type}>{type}</p>
                       return <p style={{backgroundColor: `${typeColors[type]}`}} key={type}>{type}</p>
                })
            }
        </div>
    )
}
