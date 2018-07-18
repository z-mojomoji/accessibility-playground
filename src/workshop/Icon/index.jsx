import React from 'react';
import './Icon.scss';

const Icon = () => (
    <div>
        <h2>Font Icon</h2>
        <i className="fa fa-camera iconText_icon" />

        <h2>Font Icon with Text</h2>
        <div className="iconText">
            <i className="fa fa-camera iconText_icon" />
            <span>Photo Allowed</span>
        </div>
    </div>
);

export default Icon;
