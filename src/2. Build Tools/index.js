import React, { Component } from 'react';
import { Link } from 'react-router';

import * as lesson2_1 from './1. Babel';
export { lesson2_1 }
import * as lesson2_2 from './2. Webpack';
export { lesson2_2 }
import * as lesson2_3 from './3. Package management';
export { lesson2_3 }

export default class Page extends Component {
    render() {

        return (
            <div>
                <h2>Build Tools</h2>
                <ul className="crumbs">
                    <li><Link activeClassName="active" to="/tools/babel"> Babel </Link></li>
                    <li><Link activeClassName="active" to="/tools/webpack"> Webpack </Link></li>
                    <li><Link activeClassName="active" to="/tools/package-management"> Package Management </Link></li>
                </ul>
                <div className="lesson-content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}