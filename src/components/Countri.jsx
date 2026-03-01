import React from 'react';

const Countri = ({countryPromise}) => {
    console.log(countryPromise.name.common);
    return (
        <div className='card'>
            <h2>{countryPromise.name.common}</h2>
            <img src={countryPromise.flags.flags.png} alt="" />
            
        </div>
    );
};

export default Countri;