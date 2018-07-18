import React from 'react';
import './Input.scss';

const style = {
    display: 'none',
};

const Input = () => (
    <div>
        <h2>Normal Input</h2>
        <input id="name" type="text" name="textfield" />

        <h2>Hidden Label Input</h2>
        <label htmlFor="search" style={style}>Enter your destination or property</label>
        <input type="text" name="search" id="search" />

        <h2>Input Validation</h2>
        <input id="exp-required" type="text" name="textfield" required />
    </div>
);

export default Input;
