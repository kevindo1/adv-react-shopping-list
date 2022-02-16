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
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
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

  const deleteItem = (deleteId) => {
    dispatch({
      type: 'delete',
      id: deleteId,
    });
  };

  const editItem = (task) => {
    dispatch({
      type: 'edit',
      id: task,
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <Add addItem={addItem} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}
