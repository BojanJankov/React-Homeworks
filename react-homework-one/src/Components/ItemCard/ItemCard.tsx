import { Item } from "../../interfeces/item.model";
import classes from "./ItemCard.module.css";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div
      className={`${classes.ItemCard} ${
        !item.isPacked ? classes["is-not-packed"] : ""
      }`}
    >
      <div className="description">{item.description}</div>
      <p>Quantity: {item.quantity}</p>
      <span>Packed: {item.isPacked ? "Yes" : "No"}</span>
    </div>
  );
}

export default ItemCard;
