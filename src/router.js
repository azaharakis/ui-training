import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Intro, { lesson1_1, lesson1_2 } from './1. Introduction to ES 6';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path={`intro-to-es6`} component={Intro}>
                <Route path={`defining-variables`} component={lesson1_1} />
                <Route path={`modules`} component={lesson1_2} />
            </Route>
        </Route>
    </Router>
)