import React, { Component } from 'react';
import { Link } from 'react-router';

import * as lesson3_1 from './1. Stateless Components';
export { lesson3_1 }

export default class Page extends Component {
    render() {

        return (
            <div>
                <h2>React</h2>
                <ul className="crumbs">
                    <li><Link to="/react/components"> Components </Link></li>
                </ul>
                <div className="lesson-content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}