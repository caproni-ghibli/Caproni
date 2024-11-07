import './about-me.css';
import React from 'react';
import img from './intro-art.svg';


const AboutMe: React.FC = () => {
    return (
        <div className="AboutMeContent card-content is-shadowless  has-background-primary-100">
            <div className="p-1">
                <h1 className='is-size-2 mgb'>Hello! <br/>I'm <strong>Zakaria</strong></h1>
                    <p className='is-size-5 pt-5 mt-6'>A <strong>full-stack</strong> developer who enjoys <br/>bringing ideas to life with clean,<br/> efficient, and innovative web solutions.<br/> Let’s create something awesome!</p>
                <img src={img} />
            </div>
        </div>
    );
};

export default AboutMe;