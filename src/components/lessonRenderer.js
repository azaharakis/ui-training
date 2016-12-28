import React from 'react';
import './main.css';

export default ({lesson, test, docs } = {})=> () => {

    class Page extends React.Component {
        componentDidMount() {
            test ? test() : null;
        }
        render() {
            return docs ? <div className="card markdown-body" dangerouslySetInnerHTML={{__html: docs}} /> : <div></div>
        }
    }
    return <Page />;
};