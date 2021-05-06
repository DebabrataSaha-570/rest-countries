import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    console.log('props', props)
    const {name, flag, population, region, capital} = props.country
    return (
        <div className='col-md-4'>
            <div class="card text-center" style={{ width: '18rem' }}>
                <img src={flag} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Capital: {capital}</p>
                    <p class="card-text">Population: {population}</p>
                    <p class="card-text">Population: {population}</p>
                    <p class="card-text">Region: {region}</p>
                    
                    <Link to={`/about/${name}`}><a href="#" class="btn btn-primary">See country detail</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Countries;