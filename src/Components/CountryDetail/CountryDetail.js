import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    let { country } = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${country}`
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json[0]))
            .catch(error => console.log(error))
    }, [country])
    const { name, flag , subregion, timezones, nativeName} = detail
    return (
        <div>
            <div class="card" style={{width: '18rem'}}>
                <img src={flag} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Sub region: {subregion}</p>
                        <p class="card-text">Native Name {nativeName}</p>
                        <p class="card-text">timezones: {timezones && timezones[0]}</p>
                        
                    </div>
                    </div>
            </div>
    );
};

export default CountryDetail;