import React, { Component } from 'react';
import { Link } from 'react-router';

import * as lesson3_1 from './1. Stateless Components';
export { lesson3_1 }
import * as lesson3_2 from './2. Managing State';
export { lesson3_2 }

export default class Page extends Component {
    render() {

        return (
            <div>
                <h2>React</h2>
                <ul className="crumbs">
                    <li><Link activeClassName="active" to="/react/components"> Components </Link></li>
                    <li><Link activeClassName="active" to="/react/state"> Managing State </Link></li>
                </ul>
                <div className="lesson-content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}