import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import { Fragments } from '../fixtures/fixtures';
import { Card } from '../types';

interface DeckProps {};

function Deck(props: DeckProps) {
    const [deckCards, setDeckCards] = useState<Card[]>([]);

    useEffect(() => {
        const shuffledDeck = shuffle(Fragments);
        setDeckCards(shuffledDeck);
    }, []);

    return (<div>{deckCards.length && deckCards[3].value}</div>);
}

export default Deck;
