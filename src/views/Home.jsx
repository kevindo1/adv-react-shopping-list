import React from 'react';
import Add from '../components/Add/Add';
import List from '../components/List/List';
import { useList } from '../context/Context';

export default function Home() {
  const { items, addItem, deleteItem, editItem } = useList();

  return (
    <div>
      <h1>Shopping List</h1>
      <Add addItem={addItem} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}
