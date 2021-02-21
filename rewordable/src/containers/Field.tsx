import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import Deck from './Deck';
import PlayerHand from './PlayerHand';
import { Fragments } from '../fixtures/fixtures';
import { Card } from '../types';

interface FieldProps {};

function Field(props: FieldProps) {
    const [deckCards, setDeckCards] = useState<Card[]>([]);
    const [playerCards, setPlayerCards] = useState<Card[]>([]);

    useEffect(() => {
        const shuffledFragments = shuffle(Fragments);
        setDeckCards(shuffledFragments);

        const topCards = shuffledFragments.slice(0, 4);
        setPlayerCards(topCards);
    }, []);

    return (
        <div>
            <Deck deckCards={deckCards} />
            <PlayerHand cards={playerCards} />
        </div>
    )
}

export default Field;