import { useState } from "react";
import { useEffect } from "react";
import Country from "./Country";
import './countries.css'
const Countreis = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visiteFlags, setFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = country => {
    console.log(' add this coutry')
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
    
  }
  const handleVisitedFlag = flag => {
    const newFlag = [...visiteFlags, flag];
    setFlags(newFlag)
  };
  return (
    <div>
      <h2> countries:{countries.length}</h2>
      <div>
        <h2>visited countries:{visitedCountries.length}</h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {
          visiteFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countreis;
