import React from 'react';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot';
import { Faction, FactionGraph } from '../types';

export interface FactionGraphSwarmPlotProps {
  factions: Faction[];
  factionsGraph: FactionGraph[];
  faction: Faction;
}

export const FactionGraphSwarmPlot: React.FC<FactionGraphSwarmPlotProps> = ({
  factions,
  faction,
  factionsGraph,
}) => {
  /*  const data = factionsGraph.filter(node => node.sender === faction.factionId)
    .map(node => {
      const defaultColor = 'hsl(0, 0, 0)';
      const recipientFaction = factions.find(f => f.factionId === node.recipient);

      let color = 'rgb(0,0,0)';
      if (node.sentiment > 0){
        color = 'rgb(23,239,95)';
      }
      if (node.sentiment < 0){
        color = 'rgb(196,16,16)';
      }
      return {
        recipient: recipientFaction? recipientFaction.name: node.recipient,
        sentiment: node.sentiment,
        color,

      };
    }); */

  const data = [
    {
      id: '0.0',
      group: 'group A',
      price: 492,
      volume: 6,
    },
    {
      id: '0.1',
      group: 'group A',
      price: 446,
      volume: 15,
    },
    {
      id: '0.2',
      group: 'group A',
      price: 325,
      volume: 11,
    },
    {
      id: '0.3',
      group: 'group A',
      price: 171,
      volume: 19,
    },
    {
      id: '0.4',
      group: 'group A',
      price: 153,
      volume: 5,
    },
    {
      id: '0.5',
      group: 'group A',
      price: 30,
      volume: 13,
    },
    {
      id: '0.6',
      group: 'group A',
      price: 217,
      volume: 8,
    },
    {
      id: '0.7',
      group: 'group A',
      price: 133,
      volume: 20,
    },
    {
      id: '0.8',
      group: 'group A',
      price: 166,
      volume: 15,
    },
    {
      id: '0.9',
      group: 'group A',
      price: 60,
      volume: 18,
    },
    {
      id: '0.10',
      group: 'group A',
      price: 223,
      volume: 10,
    },
    {
      id: '0.11',
      group: 'group A',
      price: 428,
      volume: 14,
    },
    {
      id: '0.12',
      group: 'group A',
      price: 43,
      volume: 16,
    },
    {
      id: '0.13',
      group: 'group A',
      price: 122,
      volume: 6,
    },
    {
      id: '0.14',
      group: 'group A',
      price: 434,
      volume: 7,
    },
    {
      id: '0.15',
      group: 'group A',
      price: 434,
      volume: 17,
    },
    {
      id: '0.16',
      group: 'group A',
      price: 198,
      volume: 9,
    },
    {
      id: '0.17',
      group: 'group A',
      price: 17,
      volume: 7,
    },
    {
      id: '0.18',
      group: 'group A',
      price: 138,
      volume: 20,
    },
    {
      id: '0.19',
      group: 'group A',
      price: 453,
      volume: 16,
    },
    {
      id: '0.20',
      group: 'group A',
      price: 246,
      volume: 17,
    },
    {
      id: '0.21',
      group: 'group A',
      price: 211,
      volume: 15,
    },
    {
      id: '0.22',
      group: 'group A',
      price: 126,
      volume: 5,
    },
    {
      id: '0.23',
      group: 'group A',
      price: 411,
      volume: 5,
    },
    {
      id: '0.24',
      group: 'group A',
      price: 300,
      volume: 4,
    },
    {
      id: '0.25',
      group: 'group A',
      price: 480,
      volume: 8,
    },
    {
      id: '0.26',
      group: 'group A',
      price: 326,
      volume: 18,
    },
    {
      id: '0.27',
      group: 'group A',
      price: 410,
      volume: 10,
    },
    {
      id: '0.28',
      group: 'group A',
      price: 491,
      volume: 13,
    },
    {
      id: '0.29',
      group: 'group A',
      price: 308,
      volume: 17,
    },
    {
      id: '0.30',
      group: 'group A',
      price: 115,
      volume: 18,
    },
    {
      id: '0.31',
      group: 'group A',
      price: 429,
      volume: 17,
    },
    {
      id: '0.32',
      group: 'group A',
      price: 401,
      volume: 9,
    },
    {
      id: '0.33',
      group: 'group A',
      price: 121,
      volume: 13,
    },
    {
      id: '0.34',
      group: 'group A',
      price: 90,
      volume: 5,
    },
    {
      id: '0.35',
      group: 'group A',
      price: 426,
      volume: 18,
    },
    {
      id: '0.36',
      group: 'group A',
      price: 428,
      volume: 17,
    },
    {
      id: '0.37',
      group: 'group A',
      price: 73,
      volume: 4,
    },
    {
      id: '0.38',
      group: 'group A',
      price: 5,
      volume: 10,
    },
    {
      id: '0.39',
      group: 'group A',
      price: 432,
      volume: 20,
    },
    {
      id: '0.40',
      group: 'group A',
      price: 75,
      volume: 17,
    },
    {
      id: '0.41',
      group: 'group A',
      price: 493,
      volume: 4,
    },
    {
      id: '0.42',
      group: 'group A',
      price: 31,
      volume: 20,
    },
    {
      id: '0.43',
      group: 'group A',
      price: 451,
      volume: 4,
    },
    {
      id: '0.44',
      group: 'group A',
      price: 60,
      volume: 16,
    },
    {
      id: '0.45',
      group: 'group A',
      price: 142,
      volume: 16,
    },
    {
      id: '0.46',
      group: 'group A',
      price: 39,
      volume: 9,
    },
    {
      id: '0.47',
      group: 'group A',
      price: 197,
      volume: 19,
    },
    {
      id: '0.48',
      group: 'group A',
      price: 399,
      volume: 5,
    },
    {
      id: '0.49',
      group: 'group A',
      price: 110,
      volume: 15,
    },
    {
      id: '0.50',
      group: 'group A',
      price: 27,
      volume: 14,
    },
    {
      id: '0.51',
      group: 'group A',
      price: 234,
      volume: 17,
    },
    {
      id: '1.0',
      group: 'group B',
      price: 158,
      volume: 5,
    },
    {
      id: '1.1',
      group: 'group B',
      price: 215,
      volume: 19,
    },
    {
      id: '1.2',
      group: 'group B',
      price: 290,
      volume: 17,
    },
    {
      id: '1.3',
      group: 'group B',
      price: 37,
      volume: 15,
    },
    {
      id: '1.4',
      group: 'group B',
      price: 400,
      volume: 6,
    },
    {
      id: '1.5',
      group: 'group B',
      price: 159,
      volume: 7,
    },
    {
      id: '1.6',
      group: 'group B',
      price: 162,
      volume: 12,
    },
    {
      id: '1.7',
      group: 'group B',
      price: 330,
      volume: 17,
    },
    {
      id: '1.8',
      group: 'group B',
      price: 131,
      volume: 18,
    },
    {
      id: '1.9',
      group: 'group B',
      price: 436,
      volume: 19,
    },
    {
      id: '1.10',
      group: 'group B',
      price: 158,
      volume: 18,
    },
    {
      id: '1.11',
      group: 'group B',
      price: 7,
      volume: 14,
    },
    {
      id: '1.12',
      group: 'group B',
      price: 12,
      volume: 4,
    },
    {
      id: '1.13',
      group: 'group B',
      price: 106,
      volume: 14,
    },
    {
      id: '1.14',
      group: 'group B',
      price: 317,
      volume: 18,
    },
    {
      id: '1.15',
      group: 'group B',
      price: 344,
      volume: 20,
    },
    {
      id: '1.16',
      group: 'group B',
      price: 226,
      volume: 12,
    },
    {
      id: '1.17',
      group: 'group B',
      price: 67,
      volume: 5,
    },
    {
      id: '1.18',
      group: 'group B',
      price: 370,
      volume: 11,
    },
    {
      id: '1.19',
      group: 'group B',
      price: 124,
      volume: 9,
    },
    {
      id: '1.20',
      group: 'group B',
      price: 255,
      volume: 15,
    },
    {
      id: '1.21',
      group: 'group B',
      price: 297,
      volume: 5,
    },
    {
      id: '1.22',
      group: 'group B',
      price: 402,
      volume: 4,
    },
    {
      id: '1.23',
      group: 'group B',
      price: 5,
      volume: 11,
    },
    {
      id: '1.24',
      group: 'group B',
      price: 43,
      volume: 14,
    },
    {
      id: '1.25',
      group: 'group B',
      price: 330,
      volume: 19,
    },
    {
      id: '1.26',
      group: 'group B',
      price: 4,
      volume: 12,
    },
    {
      id: '1.27',
      group: 'group B',
      price: 289,
      volume: 10,
    },
    {
      id: '1.28',
      group: 'group B',
      price: 476,
      volume: 11,
    },
    {
      id: '1.29',
      group: 'group B',
      price: 253,
      volume: 6,
    },
    {
      id: '1.30',
      group: 'group B',
      price: 386,
      volume: 16,
    },
    {
      id: '1.31',
      group: 'group B',
      price: 133,
      volume: 20,
    },
    {
      id: '1.32',
      group: 'group B',
      price: 418,
      volume: 8,
    },
    {
      id: '1.33',
      group: 'group B',
      price: 460,
      volume: 15,
    },
    {
      id: '1.34',
      group: 'group B',
      price: 130,
      volume: 20,
    },
    {
      id: '1.35',
      group: 'group B',
      price: 223,
      volume: 10,
    },
    {
      id: '1.36',
      group: 'group B',
      price: 286,
      volume: 16,
    },
    {
      id: '1.37',
      group: 'group B',
      price: 42,
      volume: 6,
    },
    {
      id: '1.38',
      group: 'group B',
      price: 163,
      volume: 11,
    },
    {
      id: '1.39',
      group: 'group B',
      price: 430,
      volume: 6,
    },
    {
      id: '1.40',
      group: 'group B',
      price: 131,
      volume: 4,
    },
    {
      id: '1.41',
      group: 'group B',
      price: 375,
      volume: 4,
    },
    {
      id: '1.42',
      group: 'group B',
      price: 112,
      volume: 9,
    },
    {
      id: '1.43',
      group: 'group B',
      price: 428,
      volume: 20,
    },
    {
      id: '1.44',
      group: 'group B',
      price: 284,
      volume: 17,
    },
    {
      id: '1.45',
      group: 'group B',
      price: 287,
      volume: 17,
    },
    {
      id: '1.46',
      group: 'group B',
      price: 223,
      volume: 8,
    },
    {
      id: '1.47',
      group: 'group B',
      price: 332,
      volume: 7,
    },
    {
      id: '1.48',
      group: 'group B',
      price: 235,
      volume: 18,
    },
    {
      id: '1.49',
      group: 'group B',
      price: 124,
      volume: 4,
    },
    {
      id: '1.50',
      group: 'group B',
      price: 75,
      volume: 19,
    },
    {
      id: '1.51',
      group: 'group B',
      price: 276,
      volume: 17,
    },
    {
      id: '1.52',
      group: 'group B',
      price: 437,
      volume: 12,
    },
    {
      id: '1.53',
      group: 'group B',
      price: 445,
      volume: 12,
    },
    {
      id: '1.54',
      group: 'group B',
      price: 74,
      volume: 20,
    },
    {
      id: '1.55',
      group: 'group B',
      price: 449,
      volume: 5,
    },
    {
      id: '1.56',
      group: 'group B',
      price: 142,
      volume: 18,
    },
    {
      id: '1.57',
      group: 'group B',
      price: 350,
      volume: 20,
    },
    {
      id: '1.58',
      group: 'group B',
      price: 22,
      volume: 8,
    },
    {
      id: '1.59',
      group: 'group B',
      price: 477,
      volume: 10,
    },
    {
      id: '1.60',
      group: 'group B',
      price: 204,
      volume: 15,
    },
    {
      id: '1.61',
      group: 'group B',
      price: 314,
      volume: 10,
    },
    {
      id: '1.62',
      group: 'group B',
      price: 66,
      volume: 18,
    },
    {
      id: '1.63',
      group: 'group B',
      price: 29,
      volume: 9,
    },
    {
      id: '1.64',
      group: 'group B',
      price: 259,
      volume: 19,
    },
    {
      id: '1.65',
      group: 'group B',
      price: 413,
      volume: 13,
    },
    {
      id: '1.66',
      group: 'group B',
      price: 45,
      volume: 19,
    },
    {
      id: '1.67',
      group: 'group B',
      price: 342,
      volume: 16,
    },
    {
      id: '1.68',
      group: 'group B',
      price: 71,
      volume: 19,
    },
    {
      id: '1.69',
      group: 'group B',
      price: 161,
      volume: 5,
    },
    {
      id: '1.70',
      group: 'group B',
      price: 49,
      volume: 8,
    },
    {
      id: '1.71',
      group: 'group B',
      price: 159,
      volume: 5,
    },
    {
      id: '1.72',
      group: 'group B',
      price: 257,
      volume: 10,
    },
    {
      id: '2.0',
      group: 'group C',
      price: 94,
      volume: 10,
    },
    {
      id: '2.1',
      group: 'group C',
      price: 433,
      volume: 15,
    },
    {
      id: '2.2',
      group: 'group C',
      price: 44,
      volume: 9,
    },
    {
      id: '2.3',
      group: 'group C',
      price: 320,
      volume: 9,
    },
    {
      id: '2.4',
      group: 'group C',
      price: 158,
      volume: 18,
    },
    {
      id: '2.5',
      group: 'group C',
      price: 7,
      volume: 7,
    },
    {
      id: '2.6',
      group: 'group C',
      price: 411,
      volume: 9,
    },
    {
      id: '2.7',
      group: 'group C',
      price: 486,
      volume: 14,
    },
    {
      id: '2.8',
      group: 'group C',
      price: 238,
      volume: 10,
    },
    {
      id: '2.9',
      group: 'group C',
      price: 141,
      volume: 19,
    },
    {
      id: '2.10',
      group: 'group C',
      price: 59,
      volume: 17,
    },
    {
      id: '2.11',
      group: 'group C',
      price: 394,
      volume: 10,
    },
    {
      id: '2.12',
      group: 'group C',
      price: 440,
      volume: 15,
    },
    {
      id: '2.13',
      group: 'group C',
      price: 204,
      volume: 9,
    },
    {
      id: '2.14',
      group: 'group C',
      price: 2,
      volume: 7,
    },
    {
      id: '2.15',
      group: 'group C',
      price: 274,
      volume: 17,
    },
    {
      id: '2.16',
      group: 'group C',
      price: 410,
      volume: 4,
    },
    {
      id: '2.17',
      group: 'group C',
      price: 273,
      volume: 10,
    },
    {
      id: '2.18',
      group: 'group C',
      price: 366,
      volume: 15,
    },
    {
      id: '2.19',
      group: 'group C',
      price: 492,
      volume: 7,
    },
    {
      id: '2.20',
      group: 'group C',
      price: 342,
      volume: 8,
    },
    {
      id: '2.21',
      group: 'group C',
      price: 338,
      volume: 7,
    },
    {
      id: '2.22',
      group: 'group C',
      price: 371,
      volume: 11,
    },
    {
      id: '2.23',
      group: 'group C',
      price: 36,
      volume: 16,
    },
    {
      id: '2.24',
      group: 'group C',
      price: 177,
      volume: 5,
    },
    {
      id: '2.25',
      group: 'group C',
      price: 287,
      volume: 12,
    },
    {
      id: '2.26',
      group: 'group C',
      price: 274,
      volume: 20,
    },
    {
      id: '2.27',
      group: 'group C',
      price: 20,
      volume: 14,
    },
    {
      id: '2.28',
      group: 'group C',
      price: 183,
      volume: 4,
    },
    {
      id: '2.29',
      group: 'group C',
      price: 465,
      volume: 17,
    },
    {
      id: '2.30',
      group: 'group C',
      price: 182,
      volume: 9,
    },
    {
      id: '2.31',
      group: 'group C',
      price: 240,
      volume: 18,
    },
    {
      id: '2.32',
      group: 'group C',
      price: 87,
      volume: 17,
    },
    {
      id: '2.33',
      group: 'group C',
      price: 421,
      volume: 4,
    },
    {
      id: '2.34',
      group: 'group C',
      price: 337,
      volume: 12,
    },
    {
      id: '2.35',
      group: 'group C',
      price: 53,
      volume: 19,
    },
    {
      id: '2.36',
      group: 'group C',
      price: 220,
      volume: 16,
    },
    {
      id: '2.37',
      group: 'group C',
      price: 181,
      volume: 9,
    },
    {
      id: '2.38',
      group: 'group C',
      price: 255,
      volume: 4,
    },
    {
      id: '2.39',
      group: 'group C',
      price: 371,
      volume: 12,
    },
    {
      id: '2.40',
      group: 'group C',
      price: 469,
      volume: 7,
    },
    {
      id: '2.41',
      group: 'group C',
      price: 246,
      volume: 8,
    },
    {
      id: '2.42',
      group: 'group C',
      price: 352,
      volume: 17,
    },
    {
      id: '2.43',
      group: 'group C',
      price: 335,
      volume: 20,
    },
    {
      id: '2.44',
      group: 'group C',
      price: 122,
      volume: 18,
    },
    {
      id: '2.45',
      group: 'group C',
      price: 389,
      volume: 19,
    },
    {
      id: '2.46',
      group: 'group C',
      price: 312,
      volume: 15,
    },
    {
      id: '2.47',
      group: 'group C',
      price: 233,
      volume: 14,
    },
    {
      id: '2.48',
      group: 'group C',
      price: 357,
      volume: 15,
    },
    {
      id: '2.49',
      group: 'group C',
      price: 322,
      volume: 8,
    },
    {
      id: '2.50',
      group: 'group C',
      price: 248,
      volume: 20,
    },
    {
      id: '2.51',
      group: 'group C',
      price: 493,
      volume: 15,
    },
    {
      id: '2.52',
      group: 'group C',
      price: 479,
      volume: 17,
    },
    {
      id: '2.53',
      group: 'group C',
      price: 6,
      volume: 17,
    },
    {
      id: '2.54',
      group: 'group C',
      price: 47,
      volume: 5,
    },
    {
      id: '2.55',
      group: 'group C',
      price: 90,
      volume: 5,
    },
    {
      id: '2.56',
      group: 'group C',
      price: 499,
      volume: 6,
    },
    {
      id: '2.57',
      group: 'group C',
      price: 76,
      volume: 18,
    },
    {
      id: '2.58',
      group: 'group C',
      price: 112,
      volume: 8,
    },
    {
      id: '2.59',
      group: 'group C',
      price: 132,
      volume: 14,
    },
    {
      id: '2.60',
      group: 'group C',
      price: 344,
      volume: 12,
    },
    {
      id: '2.61',
      group: 'group C',
      price: 332,
      volume: 12,
    },
    {
      id: '2.62',
      group: 'group C',
      price: 136,
      volume: 5,
    },
    {
      id: '2.63',
      group: 'group C',
      price: 239,
      volume: 12,
    },
    {
      id: '2.64',
      group: 'group C',
      price: 64,
      volume: 13,
    },
    {
      id: '2.65',
      group: 'group C',
      price: 143,
      volume: 20,
    },
    {
      id: '2.66',
      group: 'group C',
      price: 369,
      volume: 17,
    },
    {
      id: '2.67',
      group: 'group C',
      price: 497,
      volume: 12,
    },
    {
      id: '2.68',
      group: 'group C',
      price: 349,
      volume: 19,
    },
    {
      id: '2.69',
      group: 'group C',
      price: 276,
      volume: 19,
    },
  ];

  return (
    <div style={{ height: 600 }}>
      <ResponsiveSwarmPlot
        data={data}
        groups={['group A', 'group B', 'group C']}
        value="price"
        valueFormat="$.2f"
        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
        size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
        forceStrength={4}
        simulationIterations={100}
        borderColor={{
          from: 'color',
          modifiers: [
            ['darker', 0.6],
            ['opacity', 0.5],
          ],
        }}
        margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
        axisTop={{
          orient: 'top',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'group if vertical, price if horizontal',
          legendPosition: 'middle',
          legendOffset: -46,
        }}
        axisRight={{
          orient: 'right',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'price if vertical, group if horizontal',
          legendPosition: 'middle',
          legendOffset: 76,
        }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'group if vertical, price if horizontal',
          legendPosition: 'middle',
          legendOffset: 46,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'price if vertical, group if horizontal',
          legendPosition: 'middle',
          legendOffset: -76,
        }}
        motionStiffness={50}
        motionDamping={10}
      />
    </div>
  );
};
