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

  return (
    <section className="ItemPage">
      <div>
        <h1>Items:</h1>
        <div className="items-container">
          {itemsData.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      </div>
      <div className="details-container">
        <div className="items-details">
          <div>Total: {itemsData.length}</div>
          <div>
            Packed items:{" "}
            {itemsData.filter((item) => item.isPacked === true).length}
          </div>
          <div>
            Unpacked items:{" "}
            {itemsData.filter((item) => item.isPacked === false).length}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemPage;
