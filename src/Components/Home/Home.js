import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => setCountries(json))
    }, [])
    return (
        <div className="container">
          <div className="row">
          {
                countries.slice(0,50).map(x => <Countries country={x} key={x.name}></Countries>)
            }
          </div>
        </div>
    );
};

export default Home;