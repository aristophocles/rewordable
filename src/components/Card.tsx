import React from 'react';
import styled from 'styled-components';
import { Fragment } from '../types';

interface CardProps {
    fragment: Fragment;
};

const CardWrapper = styled.section`
    border-radius: 8px;
    margin: 16px auto;
    padding: 76px 56px;
    position: relative;
    background: ${(props) => `linear-gradient(to bottom, ${props.color} 22%, white 22% 25%, black 25% 82%, white 82% 85%, ${props.color} 85%)`};
`;

const CardValue = styled.div`
    font-size: 42px;
    font-family: georgia;
    font-weight: bold;
    color: white;
    min-width: 32px;
    padding-top: 8px;
`;

const Preview = styled.div`
    border-radius: 8px 0 8px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 15%;
    background: white;
`;

const PreviewValue = styled.div`
    font-size: 16px;
    font-family: georgia;
    font-weight: bold;
    color: black;
    padding-top: 4px;
`;

function Card(props: CardProps) {
    return (
        <CardWrapper color={props.fragment.color}>
            <Preview>
                <PreviewValue>
                    {props.fragment.value}
                </PreviewValue>
            </Preview>
            <CardValue>
                {props.fragment.value}
            </CardValue>
        </CardWrapper>
    );
}

export default Card;
