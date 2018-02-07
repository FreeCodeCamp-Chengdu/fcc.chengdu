/**
 * @desc 宗旨、理念
 * @author 
 */
import './style.css';
import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className="Panel index-slogan">
                <div className="slogan">
                    <h4>社区价值观</h4>
                    <br />
                    <span>倡导"人人皆可编程"</span>
                    <span>营造有温度的技术社区</span>
                </div>
            </div>
        );
    }
}

export default Index;