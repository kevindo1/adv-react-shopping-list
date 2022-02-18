import React from 'react';
import { useList } from '../../context/Context';

export default function Header() {
  const { items } = useList();

  return (
    <div>
      <p>There are {items.length} in the cart</p>
    </div>
  );
}
