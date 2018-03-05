import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Main from '../components/Main';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                   <Main />
            </div>
        )
    }
}

