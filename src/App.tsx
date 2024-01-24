import React from 'react';
import {PokemonProvider} from "./context/PokemonProvider";
import PokemonList from "./components/list/PokemonsList";
import './App.css'

const App: React.FC = () => {
  return (
      <PokemonProvider>
        <div className="App">
          <PokemonList />
        </div>
      </PokemonProvider>
  );
};

export default App;
