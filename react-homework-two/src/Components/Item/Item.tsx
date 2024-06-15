import { ItemModel } from "../../Model/item.model";
import "./Item.css";

interface ItemProps {
  item: ItemModel;
  isPackedItem: (selectedItem: ItemModel) => void;
  removeIsPackedItem: (selectedItem: ItemModel) => void;
  addQuntityItem: (selectedItem: ItemModel) => void;
  removeQuntityItem: (selectedItem: ItemModel) => void;
}

function Item({
  item,
  isPackedItem,
  removeIsPackedItem,
  addQuntityItem,
  removeQuntityItem,
}: ItemProps) {
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
