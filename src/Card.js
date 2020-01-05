import React from 'react';

const Card = () => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src='https://robohash.org/test?200x200'/>
            <div>
                <h2>John Smith</h2>
                <p>john.smith@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;