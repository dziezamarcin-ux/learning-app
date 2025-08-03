import React from 'react';
import SwipeCards from './components/SwipeCards';
import { cards } from './data/cards';

export default function App() {
  return (
    <div className="app">
      <h1>Lean & Leadership Microlearning</h1>
      <SwipeCards cards={cards} />
    </div>
  );
}