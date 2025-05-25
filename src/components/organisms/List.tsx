import { useState } from "react";

import useFetchData from "../../hooks/useFetchData";

import { PokemonListResponse } from "../../constants/types";
import { API_BASE_URL, POKEMON_LIMIT } from "../../constants/constants";

import DataLoader from "../atoms/DataLoader";
import Search from "../molecules/Search";

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
      <h1>Pokédex</h1>
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
