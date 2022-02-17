import React from 'react';
import Item from './Item';

export default function List({ items, editItem, deleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} editItem={editItem} deleteItem={deleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
