import React, { Component } from 'react';
import docs from './README.md';
import createLessonAsReactComponent from '../components/lessonRenderer';

export default class Page extends Component {
    render() {
        const Lesson = createLessonAsReactComponent({docs});
        return (
            <div>
                <h2>Encapsulating Components</h2>
                <div className="lesson-content">
                    <Lesson />
                </div>
            </div>
        )
    }
}