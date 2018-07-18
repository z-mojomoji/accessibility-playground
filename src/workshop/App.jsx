import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Form, Checkbox, Image, Icon, Link, Button, Label, Radio, Input } from 'workshop';
// import '@agoda/kite/desktop';

const App = () => (
    <BrowserRouter>
        <div>
            <main>
                <Route exact path="/Image" component={Image} />
                <Route exact path="/Icon" component={Icon} />
                <Route exact path="/Link" component={Link} />
                <Route exact path="/Button" component={Button} />
                <Route exact path="/Label" component={Label} />
                <Route exact path="/Input" component={Input} />
                <Route exact path="/Checkbox" component={Checkbox} />
                <Route exact path="/Radio" component={Radio} />
                <Route exact path="/Form" component={Form} />
            </main>
        </div>
    </BrowserRouter>
);

export default App;
