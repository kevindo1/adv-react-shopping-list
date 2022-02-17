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
                  aria-label={`Edit ${item.text}`}
                  value={item.text}
                  onChange={(e) => {
                    editItem({ ...item, text: e.target.value });
                  }}
                />
                <button aria-label={`Save ${item.text}`} onClick={() => setEditingItem(false)}>
                  Save
                </button>
              </li>
            );
          } else {
            return (
              <li key={item.id}>
                <p>{item.text}</p>
                <label>
                  <button aria-label={`Edit ${item.text}`} onClick={() => setEditingItem(true)}>
                    Edit
                  </button>
                </label>
                <label>
                  <button aria-label={`Delete ${item.text}`} onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </label>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
