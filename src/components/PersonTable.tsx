import React from 'react';
import { Input, Table, AutoComplete } from 'antd';
import { Person, PersonGraph, PersonRanked } from '../types';
import { PersonGraphBarPlot } from './PersonGraphBarPlot';

export interface FactionTableProps {
  personsRanked: PersonRanked[];
  persons: Person[],
  personsGraph: PersonGraph[];
}

export const PersonTable: React.FC<FactionTableProps> =
  ({ persons, personsGraph, personsRanked }) => {
    const columns = [
      {
        title: 'Rolle',
        dataIndex: 'role',
        key: 'role',
        // @ts-ignore
        sorter: (a, b) =>
          (a.role ? a.role : ' ').localeCompare(b.role ? b.role : ' '),
        filters: Array.from(new Set(personsRanked.map((person) => person.role))).map(
          (x) => {
            return {
              text: x,
              value: x,
            };
          },
        ),
        // @ts-ignore
        onFilter: (value, record) => {
          return record.role === value;
        },
        filterMultiple: true,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // @ts-ignore
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Fraktion',
        dataIndex: 'faction',
        key: 'faction',
        // @ts-ignore
        sorter: (a, b) =>
          (a.faction ? a.faction : ' ').localeCompare(
            b.faction ? b.faction : ' ',
          ),
        filters: Array.from(new Set(personsRanked.map((person) => person.faction))).map(
          (x) => {
            return {
              text: x,
              value: x,
            };
          },
        ),
        // @ts-ignore
        onFilter: (value, record) => {
          return record.faction === value;
        },
        filterMultiple: true,
      },
      {
        title: 'Rang',
        dataIndex: 'rank',
        key: 'rank',
        // @ts-ignore
        sorter: (a, b) => a.rank - b.rank,
      },
    ];

    const options = personsRanked.map((person) => {
      return {
        value: person.name,
      };
    });

    const [filteredPersons, setFilteredPersons] = React.useState<
    PersonRanked[] | undefined
    >(undefined);

    const [selectedPerson, setSelectedPerson] =
    React.useState<PersonRanked | undefined>(undefined);
    return (
      <>
        <AutoComplete
          style={{ width: '100%', marginBottom: 10, marginTop: 15 }}
          options={options}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        >
          <Input.Search
            size="large"
            placeholder="input here"
            onSearch={(value) => {
              if (value) {
                setFilteredPersons(
                  personsRanked.filter(
                    (person) => person.name.toUpperCase() === value.toUpperCase(),
                  ),
                );
              } else {
                setFilteredPersons(undefined);
              }
            }}
          />
        </AutoComplete>
        <Table
          rowSelection={{
            type: 'radio',
            onChange: (selectedRowKeys: React.Key[], selectedRows: PersonRanked[]) => {
              setSelectedPerson(selectedRows[0]);
            },
          }}
          rowKey={(record) => record.speakerId}
          dataSource={filteredPersons === undefined ? personsRanked : filteredPersons}
          columns={columns}
        />
        {selectedPerson?
          <PersonGraphBarPlot
            persons={persons}
            person={selectedPerson}
            personsGraph={personsGraph}
          />
          : null}
      </>
    );
  };
