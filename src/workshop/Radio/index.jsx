import React from 'react';
import './Radio.scss';

const Radio = () => (
    <div>
        <h2>Normal Radio button</h2>
        <fieldset>
            <legend id="gdesc1">Please select option</legend>
            <input id="option1" type="radio" name="Optional" value="option 1" />
            <label htmlFor="option1">Option 1</label>
            <input id="option2" type="radio" name="Optional" value="option 2" />
            <label htmlFor="option2">Option 2</label>
            <input id="option3" type="radio" name="Optional" value="option 3" />
            <label htmlFor="option3">Option 3</label>
        </fieldset>

        <h2>Custom Radio button</h2>
        <div role="radiogroup" className="radioButton">
            <span id="exp-custom-labelledby" className="radioButton_label">Please select the option</span>
            <ul className="radioButton_list">
                <li>
                    <div className="radioButton_box checked">Option1</div>
                </li>
                <li>
                    <div className="radioButton_box">Option2</div>
                </li>
                <li>
                    <div className="radioButton_box">Option3</div>
                </li>
            </ul>
        </div>
    </div>
);

export default Radio;
