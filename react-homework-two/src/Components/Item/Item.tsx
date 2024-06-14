import { useState } from "react";
import { ItemModel } from "../../Model/item.model";
import "./Item.css";

interface ItemProps {
  item: ItemModel;
}

function Item({ item }: ItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [packed, setPacked] = useState(item.isPacked);
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const removeQuntity = () => {
    if (quantity !== 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const isPackedClick = () => {
    setPacked((prev) => !prev);
  };
  return (
    <div className="Item">
      <h4 className="item-title">{item.description}</h4>
      <div className="item-info">
        <span>Quantity:</span>
        <button onClick={removeQuntity}>-</button>
        <strong>{quantity}</strong>
        <button onClick={addQuantity}>+</button>
      </div>
      <div className="item-packed-info">
        <span>Packed:</span>
        <button className="packed-btn" onClick={isPackedClick}>
          {packed ? "✔" : "❌"}
        </button>
      </div>
    </div>
  );
}

export default Item;
