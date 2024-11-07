import './my-current-position.css'
import React from 'react';
import img from './intro-art.svg';


const MyCurrentPosition: React.FC = () => {
    return (
        <div className="MyCurrentPosition card is-shadowless has-background-color-cerulean">
            <div className="p-6">
                <img className='m-5' src={img} />
                <h1 className='mt-6 is-size-4 mgb'><strong>Find out <br/> what I'm up to</strong></h1>
            </div>
        </div>
    );
};

export default MyCurrentPosition;