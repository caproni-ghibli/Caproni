import './card.css';
import React from 'react';
import img from './intro-art.svg'

interface CardProps {
    contentComponent: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ contentComponent }) => {
    return (
        <div className=" is-fluid m-3">
            <div className="card">
                <div className="card-content p-1 card has-background-primary">
                    {contentComponent}
                    <img src={img} />
                </div>
            </div>
        </div>
    );
};

export default Card;