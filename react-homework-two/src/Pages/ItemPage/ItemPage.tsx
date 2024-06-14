import { useParams } from "react-router-dom";
import "./ItemPage.css";
import { useState } from "react";
import maleJSON from "../../data/maleData.json";
import femaleJSON from "../../data/femaleData.json";
import ItemList from "../../Components/ItemList/ItemList";

function ItemPage() {
  const { gender } = useParams();
  const [maleData, setMaleData] = useState(maleJSON);
  const [femaleData, setFemaleData] = useState(femaleJSON);

  return (
    <section className="ItemPage">
      <div className="item-lists-container">
        {gender === "male" ? (
          <ItemList data={maleData} />
        ) : (
          <ItemList data={femaleData} />
        )}
      </div>
    </section>
  );
}

export default ItemPage;
