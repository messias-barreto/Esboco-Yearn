import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';

const Routes = () => (
    //Fazer o React Reconhecer a URL
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />

        </Switch>
    </BrowserRouter>
)


export default Routes;