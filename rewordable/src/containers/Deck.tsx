import React from 'react';
import styled from 'styled-components';
import { Fragment } from '../types';

interface DeckProps {
    deckCards: Fragment[];
};

function Deck(props: DeckProps) {
    const Wrapper = styled.section`
        margin-bottom: 24px;
        padding: 72px 52px;
        background: lightpink;
        min-height: 32px;
        min-width: 32px;
    `;
    return (<Wrapper></Wrapper>);
}

export default Deck;
