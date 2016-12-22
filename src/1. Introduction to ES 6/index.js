import React, { Component } from 'react';
import { Link } from 'react-router';
export { lesson1_1 } from './1. Defining Variables/lesson';

export default class Page extends Component {
    render() {
        return (
            <div>
                <ul><li><Link to="/intro-to-es6/defining-variables"> Defining Variables </Link></li></ul>
                { this.props.children }
            </div>
        )
    }
}