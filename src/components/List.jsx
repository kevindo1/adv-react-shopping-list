import React from 'react';

export default function List({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
