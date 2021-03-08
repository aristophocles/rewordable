import React, { useState } from 'react';
import Deck from './Deck';
import PlayerHand from './PlayerHand';
import { Fragment } from '../types';

function Field() {
    const [playerFragments, setPlayerFragments] = useState<Fragment[]>([]);

    const isDrawEnabled = playerFragments.length < 3;

    function addCardToPlayerHand(fragment: Fragment) {
        const updatedPlayerHand = [...playerFragments];
        updatedPlayerHand.push(fragment);
        setPlayerFragments(updatedPlayerHand);
    }

    return (
        <>
            <Deck
                addCardToPlayerHand={addCardToPlayerHand}
                isDrawEnabled={isDrawEnabled}
                setPlayerFragments={setPlayerFragments}
            />
            {playerFragments.length > 0 && <PlayerHand cards={playerFragments} />}
        </>
    )
}

export default Field;