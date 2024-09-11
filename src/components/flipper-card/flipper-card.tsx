import './flipper-card.css';
import React from 'react';

interface FlipperCardProps {
    frontComponent: React.ReactNode;
    backComponent: React.ReactNode;
}

const FlipperCard: React.FC<FlipperCardProps> = ({ frontComponent, backComponent }) => {
    return (
        <div className="is-fluid m-3">
            <div className="flipper-card">
                <div className="flipper-card-inner card">
                    <div className=" flipper-card-front p-1 card has-background-primary">
                        {frontComponent}
                    </div>
                    <div className="flipper-card-back p-1 card has-background-link">
                        {backComponent}
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default FlipperCard;