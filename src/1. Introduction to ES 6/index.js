import React, { Component } from 'react';
import { Link } from 'react-router';
import * as stuff from './1. Defining Variables/lesson';

console.log(stuff.bar)
export default class Page extends Component {
    render() {
        return (
            <div>
                <h2>Introduction to ES6</h2>
                <ul>
                    <li><Link to="/intro-to-es6/defining-variables"> Defining Variables </Link></li>
                    <li><Link to="/intro-to-es6/modules"> Modules </Link></li>
                </ul>

                { this.props.children }
            </div>
        )
    }
}