import React, { Component } from 'react';
import { Link } from 'react-router';

import * as lesson1_1 from './1. Defining Variables';
export { lesson1_1 }
import * as lesson1_2 from './2. Modules';
export { lesson1_2 }
import * as lesson1_3 from './3. Functions';
export { lesson1_3 }
import * as lesson1_4 from './4. Spread Operators';
export { lesson1_4 }
import * as lesson1_5 from './5. Template Strings';
export { lesson1_5 }
import * as lesson1_6 from './6. Classes';
export { lesson1_6 }
import * as lesson1_7 from './7. Array Operations';
export { lesson1_7 }

export default class Page extends Component {
    render() {
        return (
            <div>
                <h2>Introduction to ES6</h2>
                <ul className="crumbs">
                    <li><Link to="/intro-to-es6/defining-variables"> Defining Variables </Link></li>
                    <li><Link to="/intro-to-es6/modules"> Modules </Link></li>
                    <li><Link to="/intro-to-es6/functions"> Functions </Link></li>
                    <li><Link to="/intro-to-es6/spread-operators"> Spread Operators </Link></li>
                    <li><Link to="/intro-to-es6/template-strings"> Template Strings </Link></li>
                    <li><Link to="/intro-to-es6/classes"> Classes </Link></li>
                    <li><Link to="/intro-to-es6/array-operations"> Array Operations </Link></li>
                </ul>
                <div className="lesson-content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}