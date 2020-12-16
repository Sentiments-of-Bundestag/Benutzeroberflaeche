import { FactionGraph } from '../types';

export interface ApexSeries {
  name: string;
  data: ApexData[];
}

export interface ApexData {
  x: string;
  y: number;
}

/**
 * Creates a list of ApexSeries from a list of FactionsGraphs.
 */
export const createApexSeries = (
  factionGraphs: FactionGraph[],
): ApexSeries[] => {
  const result = new Map<string, ApexData[]>();
  for (const factionGraph of factionGraphs) {
    if (result.has(factionGraph.from)) {
      const existingApexData = result.get(factionGraph.from)!;
      existingApexData &&
        existingApexData.push({
          x: factionGraph.to,
          y: factionGraph.sentiment,
        });
      result.set(factionGraph.from, existingApexData);
    } else {
      const apexData: ApexData[] = [
        { x: factionGraph.to, y: factionGraph.sentiment },
      ];
      result.set(factionGraph.from, apexData);
    }
  }
  const b: ApexSeries[] = [];
  Array.from(result.entries()).forEach((entry) =>
    b.push({ name: entry[0], data: entry[1] }),
  );
  return b;
};
