import { useParams } from "react-router-dom";
import "./ItemPage.css";
import { useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { ItemModel } from "../../Model/item.model";
import maleJSON from "../../data/maleData.json";
import femaleJSON from "../../data/femaleData.json";

function ItemPage() {
  const { gender } = useParams();
  const [maleData, setMaleData] = useState<ItemModel[]>(maleJSON);
  const [femaleData, setFemaleData] = useState<ItemModel[]>(femaleJSON);

  const addQuntityItem = (selectedItem: ItemModel) => {
    if (gender === "male") {
      setMaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
    }
  };

  const removeQuntityItem = (selectedItem: ItemModel) => {
    if (gender === "male") {
      setMaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id && item.quantity !== 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id && item.quantity !== 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    }
  };

  const isPackedItem = (selectedItem: ItemModel) => {
    if (gender === "male") {
      setMaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = true;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = true;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  const removeIsPackedItem = (selectedItem: ItemModel) => {
    if (gender === "male") {
      setMaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = false;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleData((prev) => {
        return prev.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = false;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  return (
    <section className="ItemPage">
      <div className="item-lists-container">
        {gender === "male" ? (
          <ItemList
            data={maleData}
            isPackedItem={isPackedItem}
            removeIsPackedItem={removeIsPackedItem}
            addQuntityItem={addQuntityItem}
            removeQuntityItem={removeQuntityItem}
          />
        ) : (
          <ItemList
            data={femaleData}
            isPackedItem={isPackedItem}
            removeIsPackedItem={removeIsPackedItem}
            addQuntityItem={addQuntityItem}
            removeQuntityItem={removeQuntityItem}
          />
        )}
      </div>
    </section>
  );
}

export default ItemPage;
