/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FactionGraph } from '../types';
import { ApexSeries, createApexSeries } from './apex';

describe('createApexSeries', () => {
  test('create a non existing edge with non existing direction', () => {
    const factionGraphs: FactionGraph[] = [
      { from: 'A', to: 'B', sentiment: 1 },
    ];
    const expected: ApexSeries[] = [
      {
        name: 'A',
        data: [{ x: 'B', y: 1 }],
      },
    ];
    const actual = createApexSeries(factionGraphs);
    expect(expected).toStrictEqual(actual);
  });
  test('create multiple non existing edges with a non existing direction', () => {
    const factionGraphs: FactionGraph[] = [
      { from: 'A', to: 'B', sentiment: 1 },
      { from: 'B', to: 'A', sentiment: 1 },
      { from: 'C', to: 'B', sentiment: 1 },
    ];
    const expected: ApexSeries[] = [
      {
        name: 'A',
        data: [{ x: 'B', y: 1 }],
      },
      {
        name: 'B',
        data: [{ x: 'A', y: 1 }],
      },
      {
        name: 'C',
        data: [{ x: 'B', y: 1 }],
      },
    ];
    const actual = createApexSeries(factionGraphs);
    expect(expected).toStrictEqual(actual);
  });
  test('add a direction to an existing edge', () => {
    const factionGraphs: FactionGraph[] = [
      { from: 'A', to: 'B', sentiment: 1 },
      { from: 'A', to: 'C', sentiment: 1 },
    ];
    const expected: ApexSeries[] = [
      {
        name: 'A',
        data: [
          { x: 'B', y: 1 },
          { x: 'C', y: 1 },
        ],
      },
    ];
    const actual = createApexSeries(factionGraphs);
    expect(expected).toStrictEqual(actual);
  });
  test('should work with production data', () => {
    const factionGraphs: FactionGraph[] = [
      {
        from: 'CDU/CSU',
        sentiment: 1,
        to: 'FDP',
      },
      {
        from: 'CDU/CSU',
        sentiment: 2,
        to: 'DIE LINKE',
      },
      {
        from: 'FDP',
        sentiment: 3,
        to: 'DIE LINKE',
      },
      {
        from: 'FDP',
        sentiment: 4,
        to: 'CDU/CSU',
      },
      {
        from: 'DIE LINKE',
        sentiment: 5,
        to: 'CDU/CSU',
      },
      {
        from: 'DIE LINKE',
        sentiment: 6,
        to: 'FDP',
      },
    ];
    const expected: ApexSeries[] = [
      {
        name: 'CDU/CSU',
        data: [
          { x: 'FDP', y: 1 },
          { x: 'DIE LINKE', y: 2 },
        ],
      },
      {
        name: 'FDP',
        data: [
          { x: 'DIE LINKE', y: 3 },
          { x: 'CDU/CSU', y: 4 },
        ],
      },
      {
        name: 'DIE LINKE',
        data: [
          { x: 'CDU/CSU', y: 5 },
          { x: 'FDP', y: 6 },
        ],
      },
    ];
    const actual = createApexSeries(factionGraphs);
    expect(expected).toStrictEqual(actual);
  });
});
