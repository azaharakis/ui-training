import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import createLessonAsReactComponent from './components/lessonRenderer';

import App from './App';
import Lesson1, {
    lesson1_1,
    lesson1_2,
    lesson1_3,
    lesson1_4,
    lesson1_5,
    lesson1_6,
    lesson1_7
} from './1. Introduction to ES 6';
import Lesson2 from './2. Webpack';

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path={`intro-to-es6`} component={Lesson1}>
                <Route path={`defining-variables`} component={createLessonAsReactComponent(lesson1_1)} />
                <Route path={`modules`} component={createLessonAsReactComponent(lesson1_2)} />
                <Route path={`functions`} component={createLessonAsReactComponent(lesson1_3)} />
                <Route path={`spread-operators`} component={createLessonAsReactComponent(lesson1_4)} />
                <Route path={`template-strings`} component={createLessonAsReactComponent(lesson1_5)} />
                <Route path={`classes`} component={createLessonAsReactComponent(lesson1_6)} />
                <Route path={`array-operations`} component={createLessonAsReactComponent(lesson1_7)} />
            </Route>
            <Route path={`webpack`} component={Lesson2} />
        </Route>
    </Router>
)