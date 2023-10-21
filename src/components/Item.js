import React, { useState } from "react";

function Item({ name, category }) {
  const [addCard, setAddCard] = useState(false);
  return (
    <li className={addCard ? "in-cart" : null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setAddCard(!addCard)}>
        {addCard ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
