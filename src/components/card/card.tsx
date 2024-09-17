import './card.css';
import React from 'react';

interface CardProps {
    contentComponent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ contentComponent }) => {
    return (
        <div className=" is-fluid m-3">
            <div className="CardContent card is-shadowless">
                { contentComponent }
            </div>
        </div>
    );
};

export default Card;