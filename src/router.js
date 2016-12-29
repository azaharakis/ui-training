import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
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
import Lesson2,{
    lesson2_1,
    lesson2_2
} from './2. Build Tools'
import Lesson3,{
    lesson3_1,
    lesson3_2
} from './3. React'
import Lesson4 from './4. Writing css at scale';
import Lesson5 from './5. Encapsulating Components';

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
                <IndexRedirect to="defining-variables" />
            </Route>
            <Route path={`tools`} component={Lesson2}>
                <Route path={`babel`} component={createLessonAsReactComponent(lesson2_1)} />
                <Route path={`webpack`} component={createLessonAsReactComponent(lesson2_2)} />
                <IndexRedirect to="babel" />
            </Route>
            <Route path={`react`} component={Lesson3}>
                <Route path={`components`} component={createLessonAsReactComponent(lesson3_1)} />
                <Route path={`state`} component={createLessonAsReactComponent(lesson3_2)} />
                <IndexRedirect to="components" />
            </Route>
            <Route path={`css`} component={Lesson4} />
            <Route path={`encapsulation`} component={Lesson5} />
        </Route>
    </Router>
)