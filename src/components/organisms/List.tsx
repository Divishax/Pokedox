import { useState } from "react";

import useFetchData from "../../hooks/useFetchData";

import { PokemonListResponse } from "../../constants/types";
import { API_BASE_URL, POKEMON_LIMIT } from "../../constants/constants";

import DataLoader from "../atoms/DataLoader";
import Search from "../molecules/Search";
import Heading from "../atoms/Heading";

const List: React.FC = () => {
  const [apiUrl, setApiUrl] = useState<string>(
    `${API_BASE_URL}/pokemon?limit=${POKEMON_LIMIT}`
  );

  const { data, loading, error } = useFetchData<PokemonListResponse>(apiUrl);

  const handleNextPage = () => {
    if (data?.next) setApiUrl(data.next);
  };

  const handlePrevPage = () => {
    if (data?.previous) setApiUrl(data.previous);
  };

  return (
    <>
      <Heading mainText="Pokedox" subText="Search for any Pokemon that exists on the Planet"/>
      <DataLoader loading={loading} error={error} data={data}>
        <Search data={data}/>
        <button onClick={handlePrevPage} disabled={!data?.previous}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!data?.next}>
          Next
        </button>
      </DataLoader>
    </>
  );
};

export default List;
