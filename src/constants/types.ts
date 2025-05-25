export interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
}
export interface PokemonDetails {
    name: string;
    id: number;
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
export interface DataLoaderProps {
  loading: boolean;
  error: string | null;
  data: any;
  children: React.ReactNode;
}
