/* eslint-disable react/jsx-curly-newline */
import React, { useEffect } from 'react';
import { Input, Table, AutoComplete } from 'antd';
import { Faction, Person, PersonGraph, PersonRanked } from '../types';
import { PersonGraphBarPlot } from './PersonGraphBarPlot';

export interface FactionTableProps {
  personsRanked: PersonRanked[];
  persons: Person[];
  personsGraph: PersonGraph[];
  factions: Faction[];
}

const PersonTable: React.FC<FactionTableProps> = ({
  persons,
  personsGraph,
  personsRanked,
  factions,
}) => {
  const columns = [
    {
      title: 'Rolle',
      dataIndex: 'role',
      key: 'role',
      // @ts-ignore
      sorter: (a, b) => (a.role ? a.role : ' ').localeCompare(b.role ? b.role : ' '),
      filters: Array.from(new Set(personsRanked.map((person) => person.role))).map((x) => {
        return {
          text: x,
          value: x,
        };
      }),
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
      sorter: (a, b) => (a.faction ? a.faction : ' ').localeCompare(b.faction ? b.faction : ' '),
      filters: Array.from(new Set(personsRanked.map((person) => person.faction))).map((x) => {
        return {
          text: x,
          value: x,
        };
      }),
      // @ts-ignore
      onFilter: (value, record) => {
        return record.faction === value;
      },
      filterMultiple: true,
    },
    {
      title: 'Einfluss',
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

  const [filteredPersons, setFilteredPersons] = React.useState<PersonRanked[] | undefined>(
    undefined,
  );

  const [selectedPerson, setSelectedPerson] = React.useState<PersonRanked | undefined>(undefined);

  useEffect(() => {
    if (personsRanked.length > 0) {
      setSelectedPerson(personsRanked[4]);
    }
  }, [personsRanked]);

  return (
    <>
      <AutoComplete
        style={{ width: '100%', marginBottom: 10, marginTop: 15 }}
        options={options}
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Input.Search
          size="large"
          placeholder="Hier den Namen eingeben und auf das Suchsymbol klicken"
          onSearch={(value) => {
            if (value) {
              setFilteredPersons(
                personsRanked.filter((person) => person.name.toUpperCase() === value.toUpperCase()),
              );
            } else {
              setFilteredPersons(undefined);
            }
          }}
        />
      </AutoComplete>
      <Table
        // rowSelection={{
        //   type: 'radio',
        //   onChange: (selectedRowKeys: React.Key[], selectedRows: PersonRanked[]) => {
        //     setSelectedPerson(selectedRows[0]);
        //   },
        // }}
        onRow={(record) => {
          return {
            onClick: () => setSelectedPerson(record),
          };
        }}
        rowKey={(record) => record.speakerId}
        dataSource={filteredPersons === undefined ? personsRanked : filteredPersons}
        columns={columns}
        rowClassName={(record) => {
          return selectedPerson !== undefined && record.speakerId === selectedPerson?.speakerId
            ? 'selectedTableRow'
            : '';
        }}
      />
      {selectedPerson ? (
        <PersonGraphBarPlot
          factions={factions}
          persons={persons}
          person={selectedPerson}
          personsGraph={personsGraph}
          personsRanked={personsRanked}
        />
      ) : null}
    </>
  );
};

export default PersonTable;
