import { useCallback, useContext, useEffect, useState } from "react";
import CountryCard from "../../Components/CountryCard/CountryCard";
import SearchInput from "../../Components/SearchInput/SearchInput";
import "./DestinationPage.css";
import { ItemContext } from "../../Context/ItemContext";
import { CountryDetailsType } from "../../Model/country.model";

function DestinationPage() {
  const { countries } = useContext(ItemContext);
  const [filteredCountries, setFilteredCountries] =
    useState<CountryDetailsType[]>(countries);

  const handleSearch = useCallback(
    (value: string) => {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [countries]
  );

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries, handleSearch]);

  return (
    <section className="DestinationPage">
      <div className="search-div">
        <SearchInput handleSearch={handleSearch} />
      </div>
      <div className="countries-div">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, i) => (
            <CountryCard country={country} key={i} />
          ))
        ) : (
          <div>No countries found</div>
        )}
      </div>
    </section>
  );
}

export default DestinationPage;
