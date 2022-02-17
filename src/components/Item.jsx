import React, { useState } from 'react';

export default function List({ item, editItem, deleteItem }) {
  const [editingItem, setEditingItem] = useState(false);

  let itemStatus;
  if (editingItem) {
    itemStatus = (
      <>
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
      </>
    );
  } else {
    itemStatus = (
      <>
        <p>{item.text}</p>
        <button aria-label={`Edit ${item.text}`} onClick={() => setEditingItem(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      {itemStatus}
      <label>
        <button aria-label={`Delete ${item.text}`} onClick={() => deleteItem(item.id)}>
          Delete
        </button>
      </label>
    </div>
  );
}
