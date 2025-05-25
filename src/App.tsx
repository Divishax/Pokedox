import Details from "./components/molecules/Details";
import List from "./components/organisms/List";
import { Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/pokemon/:name" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
