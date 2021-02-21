import React from 'react';
import { Card } from '../types';

interface PlayerHandProps {
    cards: Card[];
};

function PlayerHand(props: PlayerHandProps) {
    return (
        <div>
            {props.cards.length && props.cards.map((card) => <div>{card.value}</div>)}
        </div>
    )
}

export default PlayerHand;
