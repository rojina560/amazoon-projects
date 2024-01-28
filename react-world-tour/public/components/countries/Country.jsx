/* eslint-disable react/prop-types */
import { useState } from 'react';
import'./Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  const { name, flags, population, area, cca3 } = country;
  return (
    <div>
      <div className={`country ${visited ? "visited" : "non-visited"}`}>
        <h2 style={{ color: visited ? "purple" : "green" }}>
          name:{name?.common}
        </h2>
        <img src={flags.png} alt="" />
        <h2>population:{population}</h2>
        <h2>Area:{area}</h2>
        <h3>code:{cca3}</h3>

        <button onClick={() => handleVisitedCountry(country)}>
          mark countries
        </button>
        <button onClick={() => handleVisitedFlag(country.flags.png)}>
          Visited Flag
        </button>
        <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
        {visited ? " i have visited" : "i dont visited"}
      </div>
    </div>
  );
};

export default Country;