import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Intro from './1. Introduction to ES 6';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path={`1`} component={Intro} />
        </Route>
    </Router>
)