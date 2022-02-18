import { useReducer, createContext, useContext } from 'react';

const initialItems = [
  { id: 0, text: 'Bread 🥖', done: false },
  { id: 1, text: 'Steak 🥩', done: false },
  { id: 2, text: 'Potatoes 🥔', done: false },
];

function shoppingReducer(items, action) {
  // { type: 'changed', id:1, text: "new item", done: false }
  switch (action.type) {
    // think of switch as a if statement, if (action.type === 'added') {
    // return [...items, { id: action.id, text: action.text, done: false }]
    // }
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
        if (item.id === action.select.id) {
          return action.select;
        }
        return item;
      });
    }
    default: {
      throw Error(`Unknown type: ${action.type}`);
    }
  }
}

export const ListContext = createContext();

const ListProvider = ({ children }) => {
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

  const editItem = (select) => {
    dispatch({
      type: 'edit',
      select,
    });
  };

  return (
    <ListContext.Provider value={{ items, addItem, deleteItem, editItem }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);

  return context;
};
