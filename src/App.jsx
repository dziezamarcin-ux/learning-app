import React from "react";
import { useState } from "react";
import { cards } from "./cards";

export default function App() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % cards.length);
  const prev = () => setIndex((index - 1 + cards.length) % cards.length);
  const card = cards[index];

  return (
    <div className="app">
      <h1>{card.title}</h1>
      <div className="card">
        <h3>{card.author}</h3>
        <p>{card.content}</p>
      </div>
      <div className="nav">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
    </div>
  );
}