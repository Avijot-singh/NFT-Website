import React from 'react';
import { Table } from 'antd';
import dummyData from '../utils/dummyData';
import "../style/HistoryTable.css";
function HistoryTable() {
  const flattenedData = [];

  // Loop through each category in dummyData and flatten it into a single array
  for (const categoryKey in dummyData) {
    if (dummyData.hasOwnProperty(categoryKey)) {
      flattenedData.push(...dummyData[categoryKey]);
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      className: 'ant-table-column-id', 
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'ant-table-column-name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      className: 'ant-table-column-description', 
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      className: 'ant-table-column-price', 
    },
  ];

  return (
    <div className="history-table-container">
      <h2>HistoryTable</h2>
      <Table dataSource={flattenedData} columns={columns} />
    </div>
  );
}

export default HistoryTable;
