import { Item } from "../../interfeces/item.model";
import classes from "./ItemCard.module.css";

interface ItemCardProps {
  item: Item;
  setPackedItems: (selectedItem: Item) => void;
  removePackedItems: (selectedItem: Item) => void;
}

function ItemCard({ item, setPackedItems, removePackedItems }: ItemCardProps) {
  return (
    <div
      className={`${classes.ItemCard} ${
        !item.isPacked ? classes["is-not-packed"] : ""
      }`}
      onClick={() => {
        if (item.isPacked) {
          removePackedItems(item);
        } else {
          setPackedItems(item);
        }
      }}
    >
      <div className="description">{item.description}</div>
      <p>Quantity: {item.quantity}</p>
      <span>Packed: {item.isPacked ? "Yes" : "No"}</span>
    </div>
  );
}

export default ItemCard;
