import React from 'react';
import './Button.scss';

const Button = () => (
    <div>
        <h2>Normal button</h2>
        <button className="button">
            Profile
        </button>

        <h2>Button with aria-label</h2>
        <button className="button">
            Sign up
        </button>
    </div>
);

export default Button;
