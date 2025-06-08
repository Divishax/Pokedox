import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { API_BASE_URL } from "../constants/constants";
import {
  PokemonDetails,
  SpeciesDetails,
  TypeDetails,
  EvolutionStep,
  EvolutionChain,
} from "../constants/types";

export function usePokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [speciesData, setSpeciesData] = useState<SpeciesDetails | null>(null);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [evolutionChain, setEvolutionChain] = useState<
    { name: string; image: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [pokemonRes, speciesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/pokemon/${name}`),
          fetch(`${API_BASE_URL}/pokemon-species/${name}`),
        ]);
        const pokemonData = await pokemonRes.json();
        const speciesData = await speciesRes.json();

        setPokemon(pokemonData);
        setSpeciesData(speciesData);

        const typePromises = pokemonData.types.map(async (t: any) => {
          const res = await fetch(`${API_BASE_URL}/type/${t.type.name}`);
          const data: TypeDetails = await res.json();
          return data.damage_relations.double_damage_from.map((d) => d.name);
        });

        const typeResults = await Promise.all(typePromises);
        setWeaknesses([...new Set(typeResults.flat())]);

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData: EvolutionChain = await evoRes.json();
        const chain: { name: string; image: string }[] = [];

        let current: EvolutionStep | undefined = evoData.chain;
        while (current) {
          const res = await fetch(
            `${API_BASE_URL}/pokemon/${current.species.name}`
          );
          const pokeData = await res.json();
          chain.push({
            name: current.species.name,
            image: pokeData.sprites.front_default || "/placeholder.png",
          });
          current = current.evolves_to[0];
        }

        setEvolutionChain(chain);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { pokemon, speciesData, weaknesses, evolutionChain, loading, error };
}
