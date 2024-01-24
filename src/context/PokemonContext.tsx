import { createContext } from 'react';

export const PokemonContext = createContext<PokemonContextState>({
    hasMore : true,
    loading: true,
    loadPokemons: () => {},
    pokemons: [],
});
