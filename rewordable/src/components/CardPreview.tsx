import React from 'react';
import styled from 'styled-components';
import { Fragment } from '../types';

interface CardPreviewProps {
    fragment: Fragment;
};

function CardPreview(props: CardPreviewProps) {
    const Wrapper = styled.section`
        border-radius: 8px;
        margin: 4px auto;
        padding: 24px 56px;
        min-width: 38px;
        position: relative;
        background: ${() => props.fragment.color || 'lightpink'};
    `;

    const CardValue = styled.div`
        font-size: 42px;
        font-family: georgia;
        font-weight: bold;
        color: white;
        min-width: 14px;
        padding-top: 8px;
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

    return (
        <Wrapper>
            <Preview>
                <PreviewValue>
                    {props.fragment.value}
                </PreviewValue>
            </Preview>
        </Wrapper>
    );
}

export default CardPreview;
