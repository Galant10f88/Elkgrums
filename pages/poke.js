import React from "react";
import axios from "axios";

const style = {
    ccs: 'text-center'
}

export default function App() {
  const [pokemons, setPokemons] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    console.log(response.data.results);
    setPokemons(response.data.results);
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Link</th>
        </tr>
        <tbody>
          {pokemons &&
            pokemons.map &&
            pokemons.map((pokemon, index) => (
              <tr key={pokemon.name}>
                <td>{index}</td>
                <td>{pokemon.name}</td>
                <td>{pokemon.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={getData}>Get List</button>
    </div>
  );
}
