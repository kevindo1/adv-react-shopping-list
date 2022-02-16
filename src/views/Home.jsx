import React, { useReducer } from 'react';
import Add from '../components/Add';
import List from '../components/List';

const initialItems = [
  { id: 0, text: 'Bread 🥖', done: false },
  { id: 1, text: 'Steak 🥩', done: false },
  { id: 2, text: 'Potatoes 🥔', done: false },
];

function shoppingReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    default: {
      throw Error(`Unknown type: ${action.type}`);
    }
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(shoppingReducer, initialItems);

  const addItem = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      text,
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <Add addItem={addItem} />
      <List items={items} />
    </div>
  );
}
