/**
 * @desc 导航
 * @author
 */
import './style.css';
import React, { Component } from 'react';

import logo from '../../../assets/images/fcc-logo.png';

class Index extends Component {
    render() {
        return (
            <div className="Nav MainContainer">
                <img src={logo} />
                <div>
                    <a href="#">历史活动</a>
                    <a href="https://web-conf.tk/">前端大会</a>
                    <a href="https://git-dev.leanapp.cn/">code for city</a>
                </div>
            </div>
        );
    }
}

export default Index;