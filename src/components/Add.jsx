import React, { useState } from 'react';

export default function Add({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    addItem(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          placeholder="Add Item"
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
