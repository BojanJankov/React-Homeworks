import { useContext } from "react";
import { CountryDetailsType } from "../../Model/country.model";
import "./CountryCard.css";
import { ItemContext } from "../../Context/ItemContext";

interface CountryCardProps {
  country: CountryDetailsType;
}

function CountryCard({ country }: CountryCardProps) {
  const { onClickDestination, destination } = useContext(ItemContext);

  return (
    <div
      className="CountryCard"
      style={
        country === destination
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "lightblue" }
      }
      onClick={() => {
        onClickDestination(country);
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
