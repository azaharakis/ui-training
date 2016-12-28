import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';
import './menu.css';
import 'github-markdown-css';

export default class App extends Component {
    render() {
        document.getElementById('console-log-text').innerHTML = '';
        return (
            <div className="app">
                <h2>Modules</h2>
                <ul className="crumbs">
                    <li><Link to="/intro-to-es6">Introduction to ES 6</Link></li>
                    <li><Link to="/webpack">Webpack</Link></li>
                    <li><Link to="/react">React</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
