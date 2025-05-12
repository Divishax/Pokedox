import axios from "axios";
import { useEffect, useState } from "react";
import Search from "../atoms/Search";
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Heading from "../atoms/Heading";
import Layout from "../molecules/Layout";

interface Pokemon {
    name: string;
    image: string;
}

const PokemonList: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
                const pokemonData = await Promise.all(
                    response.data.results.map(async (p: { name: string; url: string }) => {
                      const pokeDetails = await axios.get(p.url);
                      return {
                        name: p.name,
                        image: pokeDetails.data.sprites.other['official-artwork'].front_default,
                      };
                    })
                );
                setPokemon(pokemonData)
                // setPokemon(response.data.results);
            }
            catch (err) {
                setError("Failed to fetch Pokemon data");
            }
            finally {
                setLoading(false);
            }
        };

        fetchPokemon();

    }, []);

    const filteredPokemon = pokemon.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <Layout> 
            <Heading mainText="Pokédox" subText="Search any Pokémon that exists on planet"/>
            <Search search={searchTerm} setSearch={setSearchTerm} />
            <Grid container spacing={2}>
                {filteredPokemon.map((p, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                        {/* <PokemonImage name={p.name} imageUrl={p.image} /> */}
                        <Card sx={{ maxWidth: 200 }}>
                            <CardMedia
                                component="img"
                                height="120"
                                image={p.image}
                                alt={p.name}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {p.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* <ul>
                {pokemon.map((p, index) => (
                    <li key={index}>{p.name}</li>
                ))}
            </ul> */}
        </Layout>
    )
}

export default PokemonList;