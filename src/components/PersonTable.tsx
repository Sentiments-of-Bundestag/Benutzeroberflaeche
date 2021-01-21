import React from 'react';
import { Input, Table, AutoComplete } from 'antd';
import { PersonRanked } from '../types';

export interface FactionTableProps {
  persons: PersonRanked[];
}

export const PersonTable: React.FC<FactionTableProps> = ({ persons }) => {
  const columns = [
    {
      title: 'Rolle',
      dataIndex: 'role',
      key: 'role',
      // @ts-ignore
      sorter: (a, b) =>
        (a.role ? a.role : ' ').localeCompare(b.role ? b.role : ' '),
      filters: Array.from(new Set(persons.map((person) => person.role))).map(
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
      filters: Array.from(new Set(persons.map((person) => person.faction))).map(
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

  const options = persons.map((person) => {
    return {
      value: person.name,
    };
  });

  const [filteredPersons, setFilteredPersons] = React.useState<
  PersonRanked[] | undefined
  >(undefined);

  return (
    <>
      <AutoComplete
        style={{ width: 200 }}
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
                persons.filter(
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
          type: 'checkbox',
        }}
        rowKey={(record) => record.speakerId}
        dataSource={filteredPersons === undefined ? persons : filteredPersons}
        columns={columns}
      />
    </>
  );
};
