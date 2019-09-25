import React from 'react';

import './card.component.css'

export const Card = props => {
    return <div className='card-container'>
        <img
            src={`https://robohash.org/${ props.guy.id }?set=set2&size=180x180`}
            alt="person"
        />
        <h2>{ props.guy.name } : { props.guy.username }</h2>
        <p>{ props.guy.email }</p>

    </div>
}