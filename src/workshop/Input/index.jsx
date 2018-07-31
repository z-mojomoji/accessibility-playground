import React from 'react';
import './Input.scss';

const style = {
    display: 'none',
};

const Input = () => (
    <div>
        <h2>Normal Input</h2>
        <input id="name" type="text" />

        <h2>Hidden Label Input</h2>
        <label htmlFor="search" style={style}>Enter your destination or property</label>
        <input type="text" />

        <h2>Input Validation</h2>
        <input type="text" required />
    </div>
);

export default Input;
