// Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button className="primary-button self-center text-white text-lg text-10  md:whitespace-nowrap px-20 py-5 rounded-l-full rounded-r-full bg-gradient-to-l from-blue-400 to-blue-500" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
