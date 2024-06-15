import { ItemModel } from "../../Model/item.model";
import Item from "../Item/Item";
import "./ItemList.css";

interface ItemListProps {
  data: ItemModel[];
  isPackedItem: (selectedItem: ItemModel) => void;
  removeIsPackedItem: (selectedItem: ItemModel) => void;
  addQuntityItem: (selectedItem: ItemModel) => void;
  removeQuntityItem: (selectedItem: ItemModel) => void;
}

function ItemList({
  data,
  isPackedItem,
  removeIsPackedItem,
  addQuntityItem,
  removeQuntityItem,
}: ItemListProps) {
  const totalPackedItems = () => {
    return data.filter((item) => item.isPacked).length;
  };
  const totalUnpackedItems = () => {
    return data.filter((item) => !item.isPacked).length;
  };
  let sum = 0;
  const totalQuntity = (sum: number) => {
    data.map((item) => {
      sum += item.quantity;
    });
    return sum;
  };
  return (
    <>
      <div className="items-container">
        <div className="toiletries-items">
          <h2>Toiletries:</h2>
          <div className="items">
            {data.map(
              (item) =>
                item.category === "toiletries" && (
                  <Item
                    key={item.id}
                    item={item}
                    isPackedItem={isPackedItem}
                    removeIsPackedItem={removeIsPackedItem}
                    addQuntityItem={addQuntityItem}
                    removeQuntityItem={removeQuntityItem}
                  />
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
                  <Item
                    key={item.id}
                    item={item}
                    isPackedItem={isPackedItem}
                    removeIsPackedItem={removeIsPackedItem}
                    addQuntityItem={addQuntityItem}
                    removeQuntityItem={removeQuntityItem}
                  />
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
            <p>{totalQuntity(sum)}</p>
          </div>
          <div className="results">
            <h2>Total packed:</h2>
            <p>{totalPackedItems()}</p>
          </div>
          <div className="results">
            <h2>Total unpacked:</h2>
            <p>{totalUnpackedItems()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
