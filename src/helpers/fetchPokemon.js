export const fetchPokemon = async (species) => {
    let pokemonList = []

    species = species.toString().replace(' ', '-').toLowerCase()
    switch(species) {
        case "deoxys":
            species = "deoxys-normal"
            break;
        case "giratina":
            species = "giratina-altered"
            break;
        case "wormadam":
            species = "wormadam-plant"
            break;
        case "shaymin":
            species = "shaymin-land"
            break;
        case "basculin":
            species = "basculin-red-striped"
            break;
        case "darmanitan":
            species = "darmanitan-standard"
            break;
        case "tornadus":
            species = "tornadus-incarnate"
            break;
        case "thundurus":
            species = "thundurus-incarnate"
            break;
        case "landorus":
            species = "landorus-incarnate"
            break;
        case "keldeo":
            species = "keldeo-ordinary"
            break;
        case "meloetta":
            species = "meloetta-aria"
            break;
        case "meowstic":
            species = "meowstic-male"
            break;
        case "aegislash":
            species = "aegislash-shield"
            break;
        case "pumpkaboo":
            species = "pumpkaboo-average"
            break;
        case "gourgeist":
            species = "gourgeist-average"
            break;
        case "zygarde":
            species = "zygarde-50"
            break;
        case "oricorio":
            species = "oricorio-baile"
            break;
        case "lycanroc":
            species = "lycanroc-midday"
            break;
        case "wishiwashi":
            species = "wishiwashi-solo"
            break;
        case "minior":
            species = "minior-red-meteor"
            break;
        case "mimikyu":
            species = "mimikyu-disguised"
            break;
        case "toxtricity":
            species = "toxtricity-amped"
            break;
        case "eiscue":
            species = "eiscue-ice"
            break;
        case "indeedee":
            species = "indeedee-male"
            break;
        case "morpeko":
            species = "morpeko-full-belly"
            break;
        case "urshifu":
            species = "urshifu-single-strike"
            break;
        case "basculegion":
            species = "basculegion-male"
            break;
        case "enamorus":
            species = "enamorus-incarnate"
            break;
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${species}`
    const res = await fetch(url)
    const data = await res.json()

    const pokemon = {
        id: data.id,
        name: data.species.name.replace('-', ' '),
        sprite: data.sprites.front_default,
        shinySprite: data.sprites.front_shiny,
        types: data.types.map(type => {
            return type.type.name
        }),
        stats: data.stats.map(stat => {
            return {
                stat: stat.stat.name,
                value: stat.base_stat
            }
        }),
        abilities: data.abilities.map(ability => {
            return ability.ability.name
        }),
        height: data.height / 10,
        weight: data.weight / 10
    }

    pokemonList.push(pokemon)
    
    return pokemonList
}
