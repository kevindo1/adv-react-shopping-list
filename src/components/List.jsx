import React, { useState } from 'react';

export default function List({ items, editItem, deleteItem }) {
  const [editingItem, setEditingItem] = useState(false);

  return (
    <div>
      <ul>
        {items.map((item) => {
          if (editingItem === true) {
            return (
              <li key={item.id}>
                {item.text}
                <input
                  value={item.text}
                  onChange={(e) => {
                    editItem({ ...item, text: e.target.value });
                  }}
                />
                <button onClick={() => setEditingItem(false)}>Save</button>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <p>{item.text}</p>
                <button onClick={() => setEditingItem(true)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
