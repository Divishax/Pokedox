import DataLoader from "../atoms/DataLoader";
import Card from "../atoms/Card";

import PokemonInfo from "../molecules/Info";
import EvolutionChainDisplay from "../molecules/EvolutionChain";

import { usePokemonDetails } from "../../hooks/useDetails";

const Details: React.FC = () => {
  const { pokemon, speciesData, weaknesses, evolutionChain, loading, error } =
    usePokemonDetails();

  const description = speciesData?.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  )?.flavor_text;

  const eggGroups = speciesData?.egg_groups
    .map((group) => group.name)
    .join(", ");
  const gender =
    speciesData?.gender_rate === -1 ? "Genderless" : "Male, Female";

  return (
    <DataLoader loading={loading} error={error} data={pokemon}>
      {pokemon && (
        <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex">
            <Card
              image={
                pokemon.sprites?.front_default ||
                pokemon.sprites?.other["official-artwork"]?.front_default ||
                "/placeholder.png"
              }
              name={pokemon.name}
              id={pokemon.id.toString()}
            />
            <PokemonInfo
              pokemon={pokemon}
              description={description}
              gender={gender}
              eggGroups={eggGroups || "Unknown"}
              weaknesses={weaknesses}
            />
          </div>
          <EvolutionChainDisplay chain={evolutionChain} />
        </div>
      )}
    </DataLoader>
  );
};

export default Details;
