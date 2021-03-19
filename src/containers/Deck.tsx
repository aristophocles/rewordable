import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import styled from 'styled-components';
import { Fragments } from '../fixtures/fixtures';
import { Fragment } from '../types';

interface DeckProps {
    addCardToPlayerHand: (key: Fragment) => void;
    addCardsToPool: (key: Fragment[]) => void;
    cardPoolFragments: Fragment[];
    isPlayerDrawEnabled: boolean;
    setPlayerFragments: (key: Fragment[]) => void;
};

const DeckWrapper = styled.div`
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 68px 48px;
    background: black;
    min-height: 32px;
    min-width: 32px;
`;

const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: pink;
`;

function Deck(props: DeckProps) {
    const [deckFragments, setDeckFragments] = useState<Fragment[]>([]);
    const [isInitialDraw, setIsInitialDraw] = useState<Boolean>(true);

    useEffect(() => {
        const shuffledFragments = shuffle(Fragments);
        setDeckFragments(shuffledFragments);
    }, []);

    function onDraw() {
        if (isInitialDraw) {
            const topFragments = deckFragments.splice(0, 3);
            props.setPlayerFragments(topFragments);
            setIsInitialDraw(false);
        } else if (props.isPlayerDrawEnabled) {
            const nextFragment = deckFragments.shift();
            if (nextFragment) {
                props.addCardToPlayerHand(nextFragment);
            }
        } else {
            const numberOfCardsInPool = props.cardPoolFragments.length;

            if (numberOfCardsInPool === 3) {
                return;
            }

            const numberToAdd = 3 - numberOfCardsInPool;
            const topFragments = deckFragments.splice(0, numberToAdd);
            props.addCardsToPool(topFragments);
        }
    }

    return (
        <DeckWrapper data-qa="deck-wrapper" onClick={onDraw}>
            <Logo />
        </DeckWrapper>
    );
}

export default Deck;
