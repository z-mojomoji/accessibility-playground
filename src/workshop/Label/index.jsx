import React from 'react';
import './Label.scss';

const style = {
    display: 'none',
};

const Label = () => (
    <div>
        <h2>Normal Label</h2>
        <label htmlFor="searchDes">
            Search Destination
        </label>
        <input type="text" className="label_input" />
        <h2>Hidden Label</h2>
        <label htmlFor="search" style={style}>Enter your destination or property</label>
        <input type="text" className="label_input" />
    </div>
);

export default Label;
