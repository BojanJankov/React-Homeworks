import { ReactNode, createContext, useEffect, useState } from "react";
import { ItemModel } from "../Model/item.model";
import itemsJSON from "../data/items.json";
import axios from "axios";
import { CountryDetailsType } from "../Model/country.model";
import { FormValues } from "../Pages/TripDetailsPage/TripDetailsPage";

interface ItemContextType {
  items: ItemModel[];
  countries: CountryDetailsType[];
  destination: {};
  onClickDestination: (selectedCountry: CountryDetailsType) => void;
  addQuntityItem: (selectedItem: ItemModel) => void;
  removeQuntityItem: (selectedItem: ItemModel) => void;
  isPackedItem: (selectedItem: ItemModel) => void;
  removeIsPackedItem: (selectedItem: ItemModel) => void;
  resetItems: () => void;
  sortItems: (query: string) => void;
  addNewItem: (title: string, category: string, gender: string) => void;
  onSubmit: (data: FormValues) => void;
}

export const ItemContext = createContext<ItemContextType>({
  items: [],
  countries: [],
  destination: {},
  onClickDestination() {},
  addQuntityItem() {},
  removeQuntityItem() {},
  isPackedItem() {},
  removeIsPackedItem() {},
  resetItems() {},
  sortItems() {},
  addNewItem() {},
  onSubmit() {},
});

function ItemProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemModel[]>([]);
  const [countries, setCountires] = useState<CountryDetailsType[]>([]);
  const [destination, setDestination] = useState<CountryDetailsType>();
  const [tripDetails, setTripDetails] = useState<FormValues>();

  console.log("tripDetails from context", tripDetails);

  // Items page functions

  useEffect(() => {
    setItems(itemsJSON);
  }, []);

  const sortItems = (query: string) => {
    if (query === "quantity") {
      setItems((prev) => {
        return prev.sort((a, b) =>
          Number(a.quantity) - Number(b.quantity) ? 1 : -1
        );
      });
    }
    console.log(items);
    if (query === "isPacked") {
      setItems((prev) => {
        return prev.filter((item) => item.isPacked);
      });
    }
    if (query === "isNotPacked") {
      setItems((prev) => {
        return prev.filter((item) => !item.isPacked);
      });
    }
  };

  const resetItems = () => {
    setItems(itemsJSON);
  };

  const addNewItem = (title: string, category: string, gender: string) => {
    const newItem: ItemModel = {
      id: itemsJSON[itemsJSON.length - 1].id + 1,
      description: title,
      isPacked: false,
      quantity: 0,
      category: category,
      gender: gender,
    };
    setItems([...items, newItem]);
  };

  const addQuntityItem = (selectedItem: ItemModel) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const removeQuntityItem = (selectedItem: ItemModel) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id && item.quantity !== 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const isPackedItem = (selectedItem: ItemModel) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, isPacked: true };
        } else {
          return item;
        }
      });
    });
  };

  const removeIsPackedItem = (selectedItem: ItemModel) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, isPacked: false };
        } else {
          return item;
        }
      });
    });
  };

  // Countries fetch and functions

  const getCountriesFetch = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data: CountryDetailsType[] = response.data;
      console.log(data);
      setCountires(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountriesFetch();
  }, []);

  const onClickDestination = (selectedCountry: CountryDetailsType) => {
    setDestination(selectedCountry);
  };

  // Trip details functions

  const onSubmit = (data: FormValues) => {
    setTripDetails(data);
  };

  return (
    <>
      <ItemContext.Provider
        value={{
          items,
          countries,
          destination,
          onClickDestination,
          sortItems,
          resetItems,
          addNewItem,
          addQuntityItem,
          removeQuntityItem,
          isPackedItem,
          removeIsPackedItem,
          onSubmit,
        }}
      >
        {children}
      </ItemContext.Provider>
      ;
    </>
  );
}

export default ItemProvider;
