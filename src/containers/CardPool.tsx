import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Fragment } from '../types';

interface CardPoolProps {
    cards: Fragment[];
};

const CardPoolWrapper = styled.div`
    background: lightgreen;
    border-radius: 8px 8px 0 0;
    display: flex;
    min-height: 48px;
    min-width: 550px;
`;

function CardPool(props: CardPoolProps) {
    return (
        <CardPoolWrapper>
            {props.cards.map((card) =>
                <Card data-qa="card" fragment={card} key={card.id} />
            )}
        </CardPoolWrapper>
    );
}

export default CardPool;
