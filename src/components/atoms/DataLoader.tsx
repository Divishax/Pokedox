import { DataLoaderProps } from "../../constants/types";

const DataLoader: React.FC<DataLoaderProps> = ({ loading, error, data, children }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  return <>{children}</>;
};

export default DataLoader;
