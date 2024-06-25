import { useState } from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { Item } from "../../interfeces/item.model";
import "./ItemPage.css";

function ItemPage() {
  const itemsData: Item[] = [
    {
      id: "2a6db6e1-8967-4511-9839-a7cb3c895710",
      description: "T-shirts",
      quantity: 10,
      isPacked: true,
    },
    {
      id: "2dgt326e1-4267-4421-9839-a7mbdmk95710",
      description: "Shoes",
      quantity: 3,
      isPacked: true,
    },
    {
      id: "6kbefb71dw-8917-0421-7339-a7cb3c74313",
      description: "Laptop",
      quantity: 1,
      isPacked: false,
    },
  ];

  const [items, setItems] = useState<Item[]>(itemsData);

  const setPackedItems = (selectedItem: Item) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          item.isPacked = true;
          console.log(item.isPacked);
          return item;
        } else {
          return item;
        }
      });
    });
  };

  const removePackedItems = (selectedItem: Item) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          item.isPacked = false;
          return item;
        } else {
          return item;
        }
      });
    });
  };

  return (
    <section className="ItemPage">
      <div>
        <h1>Items:</h1>
        <div className="items-container">
          {items.map((item, i) => (
            <ItemCard
              key={i}
              item={item}
              setPackedItems={setPackedItems}
              removePackedItems={removePackedItems}
            />
          ))}
        </div>
      </div>
      <div className="details-container">
        <div className="items-details">
          <div>Total: {items.length}</div>
          <div>
            Packed items:{" "}
            {items.filter((item) => item.isPacked === true).length}
          </div>
          <div>
            Unpacked items:{" "}
            {items.filter((item) => item.isPacked === false).length}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemPage;
