import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import styled from 'styled-components';
import { Fragments } from '../fixtures/fixtures';
import { Fragment } from '../types';

interface DeckProps {
    addCardToPlayerHand: (key: Fragment) => void;
    setPlayerFragments: (key: Fragment[]) => void;
};

function Deck(props: DeckProps) {
    const [deckFragments, setDeckFragments] = useState<Fragment[]>([]);
    const [isInitialDraw, setIsInitialDraw] = useState<Boolean>(true);

    useEffect(() => {
        const shuffledFragments = shuffle(Fragments);
        setDeckFragments(shuffledFragments);
    }, []);

    const Wrapper = styled.div`
        border-radius: 24px;
        margin-bottom: 24px;
        padding: 72px 52px;
        background: lightpink;
        min-height: 32px;
        min-width: 32px;
    `;

    function onDraw() {
        if (isInitialDraw) {
            const topFragments = deckFragments.slice(0, 5);
            props.setPlayerFragments(topFragments);
            setIsInitialDraw(false);
        } else {
            const nextFragment = deckFragments.shift();
            if (nextFragment) {
                props.addCardToPlayerHand(nextFragment);
            }
        }
    }

    return (<Wrapper onClick={onDraw}></Wrapper>);
}

export default Deck;
