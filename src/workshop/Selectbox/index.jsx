import React from 'react';
import './Selectbox.scss';

const Selectbox = () => (
    <div>
        <h2>Normal Checkbox</h2>
        <fieldset>
            <legend>Choose some monster features</legend>

            <div>
                <input type="checkbox" id="scales" name="feature" value="scales" />
                <label htmlFor="scales">Scales</label>
            </div>

            <div>
                <input type="checkbox" id="horns" name="feature" value="horns" />
                <label htmlFor="horns">Horns</label>
            </div>

            <div>
                <input type="checkbox" id="claws" name="feature" value="claws" />
                <label htmlFor="claws">Claws</label>
            </div>

        </fieldset>
        <h2>Custom Checkbox</h2>
        <div>
            <label className="checkBox_container" htmlFor="one">One
                <input type="checkbox" className="checkBox_input" id="one" value="one" />
                <span className="checkBox_checkmark" />
            </label>
            <label className="checkBox_container" htmlFor="two">Two
                <input type="checkbox" className="checkBox_input" id="two" value="two" />
                <span className="checkBox_checkmark" />
            </label>
            <label className="checkBox_container" htmlFor="three">Three
                <input type="checkbox" className="checkBox_input" id="three" value="three" />
                <span className="checkBox_checkmark" />
            </label>
            <label className="checkBox_container" htmlFor="four">Four
                <input type="checkbox" className="checkBox_input" id="four" value="four" />
                <span className="checkBox_checkmark" />
            </label>
        </div>
    </div>
);

export default Selectbox;
