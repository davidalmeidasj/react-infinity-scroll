// Define a type for a single Pokémon
interface Pokemon {
    name: string;
    url: string;
}

interface PokemonContextState {
    hasMore : boolean;
    loading: boolean;
    loadPokemons: () => void;
    pokemons: Pokemon[];
}
