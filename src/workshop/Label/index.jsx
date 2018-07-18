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
        <input type="text" name="searchDes" id="searchDes" className="label_input" placeholder="" />
        <h2>Hidden Label</h2>
        <label htmlFor="search" style={style}>Enter your destination or property</label>
        <input type="text" name="search" id="search" className="label_input" placeholder="" />
    </div>
);

export default Label;
