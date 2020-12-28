import React, {useState} from "react"
import './App.css';
import API from "./components/API"


function App() {
  // empty array to set numerous pokemon
  const [pokemon, setPokemon] = useState(["lettuce","tomato"])

  return (
    <div className="App">
      <h1>Hello World part five thousand</h1>
      <API pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  );
}

export default App;
