import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Fragment } from '../types';

interface PlayerHandProps {
    cards: Fragment[];
};

function PlayerHand(props: PlayerHandProps) {
    const Wrapper = styled.div`
        display: flex;
    `;

    return (
        <Wrapper>
            {props.cards.length && props.cards.map((card) => <Card fragment={card}/>)}
        </Wrapper>
    )
}

export default PlayerHand;
