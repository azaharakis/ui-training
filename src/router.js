import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Intro, { lesson1_1, lesson1_2, lesson1_3, lesson1_4, lesson1_5 } from './1. Introduction to ES 6';

const createLessonAsReactComponent = lesson => () => lesson ? <div>{lesson()}</div> : <div />;

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path={`intro-to-es6`} component={Intro}>
                <Route path={`defining-variables`} component={createLessonAsReactComponent(lesson1_1)} />
                <Route path={`modules`} component={createLessonAsReactComponent(lesson1_2)} />
                <Route path={`functions`} component={createLessonAsReactComponent(lesson1_3)} />
                <Route path={`spread-operators`} component={createLessonAsReactComponent(lesson1_4)} />
                <Route path={`template-strings`} component={createLessonAsReactComponent(lesson1_5)} />
            </Route>
        </Route>
    </Router>
)