import { useContext } from "react";
import "./SummaryPage.css";
import { ItemContext } from "../../Context/ItemContext";

function SummaryPage() {
  const { items, destination } = useContext(ItemContext);
  console.log(destination);

  return (
    <section className="SummaryPage">
      <div className="summery-heading">
        <h1>Summery Page</h1>
      </div>
      <div className="summery-info-div">
        <div className="summery-items-div">
          <h2>Packed items:</h2>
          <div className="items-div-container">
            {items
              .filter((item) => item.isPacked)
              .map((item) => (
                <div className="summery-item-div">
                  <h4>{item.description}</h4>
                  <strong>Quntity:{item.quantity}</strong>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="summery-destination-div">
          <h2>Your destination:</h2>
          <div>
            <div className="country-image">
              <img
                src={destination.flags.png}
                alt="Destination flag"
                width="100px"
              />
            </div>
            <div className="country-info">
              <h4>{destination.name.common}</h4>
              <strong>Capital:{destination.capital}</strong>
              <strong>Region:{destination.region}</strong>
              <strong>Population: {destination.population}</strong>
            </div>
          </div>
        </div> */}
        <div className="summery-trip-details-div">
          <h2>Trip details:</h2>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default SummaryPage;
