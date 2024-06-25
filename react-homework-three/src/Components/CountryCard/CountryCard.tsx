import { useContext, useState } from "react";
import { CountryDetailsType } from "../../Model/country.model";
import "./CountryCard.css";
import { ItemContext } from "../../Context/ItemContext";

interface CountryCardProps {
  country: CountryDetailsType;
}

function CountryCard({ country }: CountryCardProps) {
  const [bgColorClick, setBgColorClick] = useState("lightblue");
  const { onClickDestination } = useContext(ItemContext);

  return (
    <div
      className="CountryCard"
      style={{ backgroundColor: bgColorClick }}
      onClick={() => {
        onClickDestination(country);
        if (bgColorClick !== "lightgreen") {
          setBgColorClick("lightgreen");
        } else {
          setBgColorClick("lightblue");
        }
      }}
    >
      <div className="country-image">
        <img src={country.flags.png} alt="Country flag" width="100px" />
      </div>
      <div className="country-info">
        <h4>{country.name.common}</h4>
        <strong>Capital:{country.capital}</strong>
        <strong>Region:{country.region}</strong>
        <strong>Population: {country.population}</strong>
      </div>
    </div>
  );
}

export default CountryCard;
