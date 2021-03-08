import React, { useEffect, useState } from 'react';
import shuffle from 'lodash.shuffle';
import styled from 'styled-components';
import { Fragments } from '../fixtures/fixtures';
import { Fragment } from '../types';

interface DeckProps {
    addCardToPlayerHand: (key: Fragment) => void;
    isDrawEnabled: boolean;
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

    function onDraw() {
        if (!props.isDrawEnabled) {
            return;
        }

        if (isInitialDraw) {
            const topFragments = deckFragments.slice(0, 3);
            props.setPlayerFragments(topFragments);
            setIsInitialDraw(false);
        } else {
            const nextFragment = deckFragments.shift();
            if (nextFragment) {
                props.addCardToPlayerHand(nextFragment);
            }
        }
    }

    return (
        <Wrapper onClick={onDraw}>
            <Logo />
        </Wrapper>
    );
}

export default Deck;
