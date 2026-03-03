import React, { useState } from 'react';

const Countri = ({countryPromise,visitedCountryHandle,visitFlagsHandler}) => {

const [visited, setvisited]=useState(false)

    const visitHandler=()=>{

        setvisited(visited? false:true)
        visitedCountryHandle(countryPromise)
    }
   
    return (
        <div className={`card ${visited && 'visited-color'}`}>
            <h2>{countryPromise.name.common}</h2>
            <img src={countryPromise.flags.flags.png} alt="" />
            <p>Area:{countryPromise.area.area} {countryPromise.area.area>300000? "Big country":"Small country" }</p>

            <button onClick={visitHandler}>{visited? "Visited": "not visited" }</button>
                <button onClick={()=>{visitFlagsHandler(countryPromise.flags.flags.png)}}>visit flags</button>
        </div>
    );
};

export default Countri;