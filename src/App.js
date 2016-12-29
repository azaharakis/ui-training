import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';
import './menu.css';
import 'github-markdown-css';
import 'highlight.js/styles/github-gist.css';

export default class App extends Component {
    render() {
        console.clear();
        return (
            <div className="app">
                <h2>Modules</h2>
                <ul className="crumbs">
                    <li><Link activeClassName="active" to="/intro-to-es6">Introduction to ES 6</Link></li>
                    <li><Link activeClassName="active" to="/webpack">Webpack</Link></li>
                    <li><Link activeClassName="active" to="/react">React</Link></li>
                    <li><Link activeClassName="active" to="/css">Writing css at scale</Link></li>
                    <li><Link activeClassName="active" to="/encapsulation">Encapsulating Components</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
