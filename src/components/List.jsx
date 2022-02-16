import React from 'react';

export default function List({ items }) {
  // const [currentItem, setCurrentItem] = useState(false);

  // if (editItem) {
  // }

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
