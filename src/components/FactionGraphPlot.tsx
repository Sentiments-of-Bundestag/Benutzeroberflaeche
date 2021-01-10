import React from 'react';
import { FactionGraph } from '../types';

export interface FactionGraphProps {
  factionsGraph: FactionGraph[];
}

export const FactionGraphPlot: React.FC<FactionGraphProps> = ({
  factionsGraph,
}) => {
  return <p>{factionsGraph.length}</p>;
};
