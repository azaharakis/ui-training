import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';

export default class App extends Component {
    render() {
        document.getElementById('console-log-text').innerHTML = '';
        return (
            <div>
                <h2>Modules</h2>
                <ul>
                    <li><Link to="/intro-to-es6">Introduction to ES 6</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
