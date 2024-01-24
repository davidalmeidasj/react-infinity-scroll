import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {PokemonContext} from './PokemonContext';

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const limit = 50; // Number of items to fetch per request

    const loadPokemons = useCallback(async () => {
        if (loading) return;
        setLoading(true);

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data = await response.json();
            setPokemons([...pokemons, ...data.results]);
            setOffset(offset + limit);
            setHasMore(data.results.length === limit);
        } catch (error) {
            console.error("Failed to load Pokémon", error);
        } finally {
            setLoading(false);
        }
    }, [offset, loading, pokemons]);

    // Load initial Pokémon list on mount
    useEffect(() => {
        !offset && loadPokemons();
    }, [offset, loadPokemons]);

    return (
        <PokemonContext.Provider value={{ pokemons, loadPokemons, loading, hasMore }}>
          {children}
        </PokemonContext.Provider>
    );
};
