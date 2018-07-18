import React from 'react';
import './Form.scss';

const Form = () => (
    <form className="loginForm">
        <p id="loginForm">Login platforms</p>
        <label htmlFor="email">Email:</label>
        <input id="email" className="loginForm_input" type="email" name="email" required />
        <label htmlFor="password" className="loginForm_label">Password:</label>
        <input id="password" className="loginForm_input" type="password" name="email" required />
        <p>
            <a role="button" tabIndex="0" className="loginForm_forget">Forget your password</a>
            <button type="submit" onClick="myFuncion()" className="loginForm_btn">Login</button>
        </p>
    </form>
);

export default Form;
