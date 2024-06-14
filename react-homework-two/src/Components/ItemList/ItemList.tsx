import { ItemModel } from "../../Model/item.model";
import Item from "../Item/Item";
import "./ItemList.css";

interface ItemListProps {
  data: ItemModel[];
}

function ItemList({ data }: ItemListProps) {
  return (
    <>
      <div className="items-container">
        <div className="toiletries-items">
          <h2>Toiletries:</h2>
          <div className="items">
            {data.map(
              (item) =>
                item.category === "toiletries" && (
                  <Item key={item.id} item={item} />
                )
            )}
          </div>
        </div>
        <div className="essentials-items">
          <h2>Essentials:</h2>
          <div className="items">
            {data.map(
              (item) =>
                item.category === "essentials" && (
                  <Item key={item.id} item={item} />
                )
            )}
          </div>
        </div>
      </div>
      <div className="results-container">
        <div className="total-results">
          <div className="results">
            <h2>Total items:</h2>
            <p>{data.length}</p>
          </div>
          <div className="results">
            <h2>Total quntity:</h2>
            <p>{}</p>
          </div>
          <div className="results">
            <h2>Total packed:</h2>
            <p>{data.length}</p>
          </div>
          <div className="results">
            <h2>Total unpacked:</h2>
            <p>{data.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
