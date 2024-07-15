import { ReactNode, createContext, useEffect, useState } from "react";
import { ItemModel } from "../Model/item.model";
import itemsJSON from "../data/items.json";
import axios from "axios";
import { CountryDetailsType } from "../Model/country.model";
import { FormValues } from "../Pages/TripDetailsPage/TripDetailsPage";
import { v4 as uuid } from "uuid";

interface ItemContextType {
  items: ItemModel[];
  countries: CountryDetailsType[];
  tripDetails: FormValues | null;
  destination: CountryDetailsType | null;
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
  destination: null,
  onClickDestination() {},
  addQuntityItem() {},
  removeQuntityItem() {},
  isPackedItem() {},
  removeIsPackedItem() {},
  resetItems() {},
  sortItems() {
    return [];
  },
  addNewItem() {},
  onSubmit() {},
  tripDetails: null,
});

function ItemProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemModel[]>([]);
  const [countries, setCountires] = useState<CountryDetailsType[]>([]);
  const [destination, setDestination] = useState<CountryDetailsType | null>(
    null
  );
  const [tripDetails, setTripDetails] = useState<FormValues | null>(null);

  console.log("tripDetails from context", tripDetails);
  console.log("destination", destination);

  // Items page functions

  useEffect(() => {
    setItems((prev) => {
      return (prev = itemsJSON.map((item) => {
        return { ...item, quantity: 0, isPacked: false };
      }));
    });
  }, []);

  const sortItems = (query: string) => {
    if (query === "title") {
      setItems((prev) => {
        const copyPrev: ItemModel[] = [...prev];
        copyPrev.sort((a, b) => (b.description > a.description ? 1 : -1));
        return copyPrev;
      });
    }

    if (query === "quantity") {
      setItems((prev) => {
        const copyPrev: ItemModel[] = [...prev];
        copyPrev.sort((a, b) =>
          Number(b.quantity) > Number(a.quantity) ? 1 : -1
        );
        return copyPrev;
      });
    }
    console.log(items);
    if (query === "isPacked") {
      setItems((prev) => {
        const copyPrev: ItemModel[] = [...prev];
        copyPrev.sort((a, b) => (b.isPacked > a.isPacked ? 1 : -1));
        return copyPrev;
      });
    }
    if (query === "isNotPacked") {
      setItems((prev) => {
        const copyPrev: ItemModel[] = [...prev];
        copyPrev.sort((a, b) => (!b.isPacked > !a.isPacked ? 1 : -1));
        return copyPrev;
      });
    }
  };

  const resetItems = () => {
    setItems((prev) => {
      return prev.map((item) => {
        return { ...item, quantity: 0, isPacked: false };
      });
    });
  };

  const addNewItem = (title: string, category: string, gender: string) => {
    const foundItem = items.find((item) => item.description === title);

    if (foundItem) return;

    const newItem: ItemModel = {
      id: uuid(),
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
          tripDetails,
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
