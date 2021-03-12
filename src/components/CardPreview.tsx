import React from 'react';
import styled from 'styled-components';
import { Fragment } from '../types';

interface CardPreviewProps {
    fragment: Fragment;
};

const PreviewWrapper = styled.section`
    border-radius: 8px;
    margin: 4px auto;
    padding: 24px 56px;
    min-width: 38px;
    position: relative;
    background: ${(props) => props.color || 'lightpink'};
`;

const Preview = styled.div`
    border-radius: 8px 0 8px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 65%;
    background: white;
`;

const PreviewValue = styled.div`
    font-size: 16px;
    font-family: georgia;
    font-weight: bold;
    color: black;
    padding-top: 4px;
`;

function CardPreview(props: CardPreviewProps) {
    return (
        <PreviewWrapper color={props.fragment.color}>
            <Preview>
                <PreviewValue>
                    {props.fragment.value}
                </PreviewValue>
            </Preview>
        </PreviewWrapper>
    );
}

export default CardPreview;
