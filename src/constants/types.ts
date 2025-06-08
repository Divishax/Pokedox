// List
export interface Pokemon {
  name: string;
  url: string;
  type: string[];
  gender?: string;
  stat?: string;
}
export interface PokemonListResponse {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
}

// Details
export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    other: {
      "official-artwork": {
        front_default: string | null;
      };
    };
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export interface SpeciesDetails {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  gender_rate: number;
  egg_groups: { name: string }[];
  evolution_chain: { url: string };
}

export interface TypeDetails {
  damage_relations: {
    double_damage_from: { name: string }[];
  };
}

export interface EvolutionStep {
  species: { name: string };
  evolves_to: EvolutionStep[];
}

export interface EvolutionChain {
  chain: EvolutionStep;
}

// DataLoaderProps
export interface DataLoaderProps {
  loading: boolean;
  error: string | null;
  data: any;
  children: React.ReactNode;
}
