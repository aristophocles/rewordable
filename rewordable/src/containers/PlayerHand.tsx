import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardPreview from '../components/CardPreview';
import { Fragment } from '../types';

interface PlayerHandProps {
    cards: Fragment[];
};

function PlayerHand(props: PlayerHandProps) {
    const [isShelfOpen, setIsShelfOpen] = useState<Boolean>(true);
    const hasCards = props.cards.length > 0;

    const Wrapper = styled.div`
        background: lightpink;
        bottom: 0;
        border-radius: 8px 8px 0 0;
        display: flex;
        min-height: 48px;
        min-width: 550px;
        position: absolute;
    `;

    const DrawLine = styled.h1`
        font-family: georgia;
        font-size: 32px;
        color: black;
        margin: auto;
    `;

    function onToggleShelf() {
        if (hasCards) {
            setIsShelfOpen(!isShelfOpen);
        }
    }

    const shouldShowHand = isShelfOpen && hasCards;

    const openShelf = props.cards.map((card) => <Card fragment={card} />);
    const closedShelf = props.cards.map((card) => <CardPreview fragment={card} />);

    const showDrawLine = !shouldShowHand && props.cards.length === 0;

    return (
        <Wrapper onClick={onToggleShelf}>
            {shouldShowHand ? openShelf : closedShelf}
            {showDrawLine && <DrawLine>You have no cards</DrawLine>}
        </Wrapper>
    )
}

export default PlayerHand;
