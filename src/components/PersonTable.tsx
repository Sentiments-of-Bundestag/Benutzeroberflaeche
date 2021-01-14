import React from 'react';
import { Table, Tag, Space } from 'antd';
import { Person } from '../types';

export interface FactionTableProps {
  persons: Person[];
}

export const PersonTable: React.FC<FactionTableProps> = ({ persons }) => {
  const { Column, ColumnGroup } = Table;


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rolle',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Fraktion',
      dataIndex: 'faction',
      key: 'faction',
    },
  ];

  return (
    <Table dataSource={persons} columns={columns} />
  );
};
