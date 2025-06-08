import { Routes, Route } from "react-router-dom";

import Layout from "./components/atoms/Layout";
import Details from "./components/molecules/Details";
import List from "./components/organisms/List";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </Layout>
  );
};

export default App;
