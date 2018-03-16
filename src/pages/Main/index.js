import React, { Component } from 'react';
import './style.css';

import Nav from './Nav';
import Banner from './Banner';

class Index extends Component {
    render() {
        return (
            <div className="MainContent">
                <Nav />
                <Banner />
            </div>
        );
    }
}

export default Index;
