import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokemonListResponse } from "../../constants/types";
import SearchBar from "../atoms/SearchBar";

interface SearchProps {
  data: PokemonListResponse | null;
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonListResponse["results"]>([]);

  useEffect(() => {
    if (data) {
      const filtered = data.results.filter((pokemon) => {
        const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
        return (
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pokemonId.includes(searchTerm)
        )
      }
      );
      setFilteredPokemons(filtered);
    }
  }, [data, searchTerm]);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {filteredPokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
