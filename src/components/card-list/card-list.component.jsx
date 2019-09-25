import React from 'react';

import { Card } from '../card/card.component';

import './card-list.component.css';

export const CardList = props => {
    return <div className={'card-list'}>
        {props.guys.map(guy => <Card guy={guy} key={guy.id} />)}
    </div>;
}