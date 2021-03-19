import React, { useState } from 'react';
import Deck from './Deck';
import PlayerHand from './PlayerHand';
import CardPool from './CardPool';
import { Fragment } from '../types';

function Field() {
    const [playerFragments, setPlayerFragments] = useState<Fragment[]>([]);
    const [cardPoolFragments, setCardPoolFragments] = useState<Fragment[]>([]);

    const isPlayerDrawEnabled = playerFragments.length < 3;

    function addCardToPlayerHand(fragment: Fragment) {
        const updatedPlayerHand = [...playerFragments];
        updatedPlayerHand.push(fragment);
        setPlayerFragments(updatedPlayerHand);
    }

    function addCardsToPool(fragments: Fragment[]) {
        const updatedCardPoolFragments = cardPoolFragments.concat(fragments);
        setCardPoolFragments(updatedCardPoolFragments);
    }

    return (
        <>
            <Deck
                addCardToPlayerHand={addCardToPlayerHand}
                addCardsToPool={addCardsToPool}
                cardPoolFragments={cardPoolFragments}
                isPlayerDrawEnabled={isPlayerDrawEnabled}
                setPlayerFragments={setPlayerFragments}
            />
            {cardPoolFragments.length > 0 && <CardPool cards={cardPoolFragments} />}
            <PlayerHand cards={playerFragments} />
        </>
    )
}

export default Field;