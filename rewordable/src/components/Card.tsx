import React from 'react';

interface CardProps {
    value: string;
};

function Card(props: CardProps) {
    return <div>Card Value: ${props.value}</div>;
}

export default Card;
