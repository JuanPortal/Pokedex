import React from "react";
import './index.css'
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <>
      <h1>Pokédex</h1>
      <SearchBar />
      <Card />
    </>
  );
}

export default App;
