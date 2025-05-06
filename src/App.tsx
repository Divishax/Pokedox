import PokemonList from "./components/organisms/PokemonList";
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Pokedox</h1>
      <Routes>
        <Route path="/" element={<PokemonList/>}/>
      </Routes>
    </>
  )
}

export default App
