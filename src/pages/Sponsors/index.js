/**
 * @desc 历史活动页面
 * @author 
 */
import React, { Component } from 'react';
import sponsors from './data';
import './style.css';

class Sponsors extends Component {
    render() {
        return (
            <div className="row logolist">
                {
                    sponsors.map((ele,index) => {
                        return (
                            <div className="col-md-2 col-xs-4">
                                <img src={ele.img} alt={ele.title} className="logo-img"/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Sponsors;
