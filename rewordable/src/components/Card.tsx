import React from 'react';
import styled from 'styled-components';

interface CardProps {
    value: string;
};

function Card(props: CardProps) {
    const Wrapper = styled.section`
        margin: 8px;
        padding: 72px 52px;
        background: papayawhip;
    `;

    const CardValue = styled.div`
        font-size: 24px;
        font-weight: bold;
        color: black;
        min-width: 32px;
    `;

    return (
        <Wrapper>
            <CardValue>
                {props.value}
            </CardValue>
        </Wrapper>
    );
}

export default Card;
