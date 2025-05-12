import PokemonList from "./components/organisms/PokemonList";
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList/>}/>
      </Routes>
    </>
  )
}

export default App
