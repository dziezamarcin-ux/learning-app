import React, { useState } from 'react';

export default function SwipeCards({ cards }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % cards.length);
  const prev = () => setIndex((index - 1 + cards.length) % cards.length);

  const card = cards[index];

  return (
    <div className="card-container">
      <div className="card">
        <h2>{card.author}</h2>
        <h3>{card.title}</h3>
        {card.type === 'text' && <p>{card.content}</p>}
        {card.type === 'image' && <img src={card.content} alt="" />}
        {card.type === 'video' && (
          <video controls width="100%">
            <source src={card.content} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="buttons">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
    </div>
  );
}