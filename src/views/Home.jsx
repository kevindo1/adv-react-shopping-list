import React from 'react';
import Add from '../components/Add/Add';
import List from '../components/List/List';

export default function Home() {
  return (
    <div>
      <h1>Shopping List</h1>
      <Add addItem={addItem} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}
