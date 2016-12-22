import React, { Component } from 'react';
import { Link } from 'react-router';

export { lesson1_1 } from './1. Defining Variables/lesson';
export { lesson1_2 } from './2. Modules/lesson';
export { lesson1_3 } from './3. Functions/lesson';

export default class Page extends Component {
    render() {
        return (
            <div>
                <h2>Introduction to ES6</h2>
                <ul>
                    <li><Link to="/intro-to-es6/defining-variables"> Defining Variables </Link></li>
                    <li><Link to="/intro-to-es6/modules"> Modules </Link></li>
                    <li><Link to="/intro-to-es6/functions"> Functions </Link></li>
                </ul>

                { this.props.children }
            </div>
        )
    }
}