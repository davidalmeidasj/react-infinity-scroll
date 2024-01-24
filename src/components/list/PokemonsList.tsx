// PokemonList.tsx
import React, {useContext, useState, useRef} from 'react';
import { PokemonContext } from "../../context/PokemonContext";
import styles from './PokemonList.module.scss';
import LogoText from "../logo/LogoText";
import {extractPokemonNumber} from "../../utils/pokemonUtils";
import InfiniteScroll from "../infinite-scroll/InfiniteScroll";
import Loading from "../loading/Loading";

const   PokemonList: React.FC = () => {
    const { pokemons, loadPokemons, loading, hasMore } = useContext(PokemonContext);
    const [isFetching, setIsFetching] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);

    const handleLoadMore = async () => {
        if (!isFetching && hasMore) {
            setIsFetching(true);

            const currentScrollPosition = listRef.current?.scrollTop;

            await loadPokemons();

            if (listRef.current && currentScrollPosition) {
                listRef.current.scrollTop = currentScrollPosition;
            }

            setIsFetching(false);
        }
    };

    return (
        <div className={styles.pokemonListContainer}>
            <span className={styles.pokemonTitle}>
                <LogoText text={`Pokémon list`}/>
            </span>
            <ul className={styles.pokemonList} ref={listRef}>
                {pokemons.map(pokemon => (
                    <a href={pokemon.url}>{extractPokemonNumber(pokemon.url)} {pokemon.name.toUpperCase()}</a>
                ))}
                <Loading active={loading} >
                    <li/>
                </Loading>
            </ul>
            <InfiniteScroll onBottomHit={handleLoadMore} isLoading={loading} scrollableRef={listRef} />

        </div>
    );
};

export default PokemonList;
