import { useContext } from "react";
import { ItemModel } from "../../Model/item.model";
import "./Item.css";
import { ItemContext } from "../../Context/ItemContext";

interface ItemProps {
  item: ItemModel;
}

function Item({ item }: ItemProps) {
  const {
    isPackedItem,
    addQuntityItem,
    removeIsPackedItem,
    removeQuntityItem,
  } = useContext(ItemContext);
  return (
    <div className="Item">
      <h4 className="item-title">{item.description}</h4>
      <div className="item-info">
        <span>Quantity:</span>
        <button
          onClick={() => {
            removeQuntityItem(item);
          }}
        >
          -
        </button>
        <strong>{item.quantity}</strong>
        <button
          onClick={() => {
            addQuntityItem(item);
          }}
        >
          +
        </button>
      </div>
      <div className="item-packed-info">
        <span>Packed:</span>
        <button
          className="packed-btn"
          onClick={() => {
            if (item.isPacked) {
              removeIsPackedItem(item);
            } else {
              isPackedItem(item);
            }
          }}
        >
          {item.isPacked ? "✔" : "❌"}
        </button>
      </div>
    </div>
  );
}

export default Item;
