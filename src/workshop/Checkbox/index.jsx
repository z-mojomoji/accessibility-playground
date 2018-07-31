import React from 'react';
import './Checkbox.scss';

const Checkbox = () => (
    <div>
        <h2>Normal Checkbox</h2>
        <fieldset>
            <legend>Choose some monster features</legend>

            <div>
                <input type="checkbox" value="scales" />
                <label htmlFor="scales">Scales</label>
            </div>

            <div>
                <input type="checkbox" value="horns" />
                <label htmlFor="horns">Horns</label>
            </div>

            <div>
                <input type="checkbox" value="claws" />
                <label htmlFor="claws">Claws</label>
            </div>

        </fieldset>
        <h2>Custom Checkbox</h2>
        <div>
            <label className="checkBox_container" htmlFor="one">One
                <input type="checkbox" className="checkBox_input" />
                <span className="checkBox_checkmark checked" />
            </label>
            <label className="checkBox_container" htmlFor="two">Two
                <input type="checkbox" className="checkBox_input" />
                <span className="checkBox_checkmark" />
            </label>
            <label className="checkBox_container" htmlFor="three">Three
                <input type="checkbox" className="checkBox_input" />
                <span className="checkBox_checkmark" />
            </label>
            <label className="checkBox_container" htmlFor="four">Four
                <input type="checkbox" className="checkBox_input" />
                <span className="checkBox_checkmark" />
            </label>
        </div>
    </div>
);

export default Checkbox;
