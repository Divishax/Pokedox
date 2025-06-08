import React from "react";
import Card from "../atoms/Card";

interface Props {
  chain: { name: string; image: string }[];
}

const EvolutionChainDisplay: React.FC<Props> = ({ chain }) => (
  <div className="mt-8">
    <h3 className="text-xl font-bold">Evolution Chain</h3>
    <div className="flex space-x-4 mt-4">
      {chain.map((evolution) => (
        <Card key={evolution.name} image={evolution.image} name={evolution.name} id="" />
      ))}
    </div>
  </div>
);

export default EvolutionChainDisplay;
