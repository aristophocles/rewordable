import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import Deck from './Deck';
import PlayerHand from './PlayerHand';
import { Fragments } from '../fixtures/fixtures';
import { Fragment } from '../types';

interface FieldProps {};

function Field(props: FieldProps) {
    const [deckFragments, setDeckFragments] = useState<Fragment[]>([]);
    const [playerFragments, setPlayerFragments] = useState<Fragment[]>([]);

    useEffect(() => {
        const shuffledFragments = shuffle(Fragments);
        setDeckFragments(shuffledFragments);

        const topFragments = shuffledFragments.slice(0, 4);
        setPlayerFragments(topFragments);
    }, []);

    return (
        <>
            <Deck deckCards={deckFragments} />
            <PlayerHand cards={playerFragments} />
        </>
    )
}

export default Field;