import React, { useContext } from 'react';
import {PokemonContext} from "../context/PokemonContext";

const PokemonList: React.FC = () => {
    const { pokemons } = useContext(PokemonContext);

    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.url}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;
