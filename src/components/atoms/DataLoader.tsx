import React from "react";

interface DataLoaderProps {
  loading: boolean;
  error: string | null;
  data: any;
  children: React.ReactNode;
}

const DataLoader: React.FC<DataLoaderProps> = ({ loading, error, data, children }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data found.</p>;

  return <>{children}</>;
};

export default DataLoader;
