import React, { use, useState } from "react";
import Countri from "../Countri";


const Countries = ({ allCountries }) => {

const [countrieVisited,setCountriesVisited]=useState([])

const [visitFlags,setVisitFlags]=useState([])

const visitedCountryHandle=(countryPromise)=>{

const newVisitedCountries=[...countrieVisited,countryPromise]
setCountriesVisited(newVisitedCountries)
}

const visitFlagsHandler=(flags)=>{
  const collectedFlags=[...visitFlags,flags]
  setVisitFlags(collectedFlags)
}
  const countriesData = use(allCountries);
  const countries = countriesData.countries;
  return (
    <div>
      <h2>All Countries List {countries.length}</h2>
      <h3>Tottal Visited countries:{countrieVisited.length}</h3>
      <h3>total flags:{visitFlags.length}</h3>
      <div>{
        visitFlags.map((flag,index)=> <img key={index} src={flag} alt="" /> )
        }</div>
      <ol>
 {countrieVisited.map(country=><li>{country.name.common}</li>)
 }
      </ol>
     
      <div className="contain">
        {countries.map((country) => (
          <Countri key={country.ccn3.ccn3}
           countryPromise={country}
           visitFlagsHandler={visitFlagsHandler}
            visitedCountryHandle={visitedCountryHandle}></Countri>
        ))}
      </div>
    </div>
  );
};

export default Countries;
