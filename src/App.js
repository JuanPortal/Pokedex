import React, { useState } from "react";
import './index.css'
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";

function App() {

  const [pokemonName, setPokemonName] = useState('unown')

  return (
    <>
      <h1>Pokédex</h1>
      <SearchBar pokemonName={pokemonName} setPokemonName={ setPokemonName }/>
      {/* <Card pokemonName={ pokemonName.toLowerCase() }/> */}
      <Card pokemonName={ pokemonName.toLowerCase() }/>
    </>
  );
}

export default App;
