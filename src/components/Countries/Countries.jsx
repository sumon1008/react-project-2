import React, { use } from "react";
import Countri from "../Countri";

const Countries = ({ allCountries }) => {
  const countriesData = use(allCountries);
  const countries = countriesData.countries;
  return (
    <div> 
        <h2>All Countries {countries.length}</h2>
           <div className="contain">
     
      {
      
      countries.map(country=><Countri countryPromise={country}></Countri>)
      }
    </div>
    </div>
 
  );
};

export default Countries;
