import React from 'react';
import Card from '../components/Card';
import { Fragment } from '../types';

interface PlayerHandProps {
    cards: Fragment[];
};

function PlayerHand(props: PlayerHandProps) {
    return (
        <div>
            {props.cards.length && props.cards.map((card) => <Card value={card.value}/>)}
        </div>
    )
}

export default PlayerHand;
