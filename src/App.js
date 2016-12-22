import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div>
            <ul>
                <li><Link to="/1">Introduction to ES 6</Link></li>
            </ul>

            {this.props.children}
        </div>
    );
  }
}
