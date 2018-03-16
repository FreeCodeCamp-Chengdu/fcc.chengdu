/**
 * @desc 宗旨、理念
 * @author 
 */
import './style.css';
import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner';

class Index extends Component {
    render() {
        return (
            <div className="Panel index-slogan">
                <div className="MainContent">
                    <Nav />
                    <Banner />
                </div>
            </div>
        );
    }
}

export default Index;