import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className='country'>
            <h2>{props.name}</h2>
            <h3>{props.population}</h3>
        </div>
    )
}

export default Country;