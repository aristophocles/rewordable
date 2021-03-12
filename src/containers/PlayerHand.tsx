import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardPreview from '../components/CardPreview';
import { Fragment } from '../types';

interface PlayerHandProps {
    cards: Fragment[];
};

const PlayerHandWrapper = styled.div`
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

function PlayerHand(props: PlayerHandProps) {
    const [isShelfOpen, setIsShelfOpen] = useState<Boolean>(true);
    const hasCards = props.cards.length > 0;

    function onToggleShelf() {
        if (hasCards) {
            setIsShelfOpen(!isShelfOpen);
        }
    }

    const shouldShowHand = isShelfOpen && hasCards;

    const openShelf = (
        <span data-qa="open-shelf">
            {props.cards.map((card, i) =>
                <Card data-qa="card" fragment={card} key={card.id} />
            )}
        </span>
    );
    const closedShelf = (
        <span data-qa="closed-shelf">
            {props.cards.map((card) =>
                <CardPreview data-qa="card-preview" fragment={card} key={card.id} />
            )}
        </span>
    );

    const showDrawLine = !shouldShowHand && props.cards.length === 0;

    return (
        <PlayerHandWrapper data-qa="player-hand-wrapper" onClick={onToggleShelf}>
            {shouldShowHand ? openShelf : closedShelf}
            {showDrawLine && <DrawLine>You have no cards</DrawLine>}
        </PlayerHandWrapper>
    )
}

export default PlayerHand;
