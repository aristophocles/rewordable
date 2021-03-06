import React from 'react';
import { Fragment } from '../types';

interface DeckProps {
    deckCards: Fragment[];
};

function Deck(props: DeckProps) {
    return (<button>Deck</button>);
}

export default Deck;
