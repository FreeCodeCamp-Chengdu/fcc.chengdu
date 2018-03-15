/**
 * @desc 大事件记录、展示板块
 * @author 
 */
import './style.css';
import React, { Component } from 'react';

const Events = require('./events.json');

class Index extends Component {
    toLeft = () => {
        // 向左移
    }

    toRight = () => {
        // 向右移
    }

    render() {
        return (
            <div className="Panel index-events">
                {/* 标题 */}
                <div className="title-panel">
                    <div>社区大事件</div>
                    <div className="preloader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="title-panel-bg">
                    <p>Big</p>
                    <p>even</p>
                </div>

                <div className="content-events">
                    <div className="events-slider">
                        <i onClick={this.toLeft} className="iconfont icon-jiantou1-copy-copy-copy"></i>
                        <i onClick={this.toRight} className="iconfont icon-jiantou1-copy"></i>
                        <div className="slider-content">
                            {
                                Events && Events.events.map((item, index) => {
                                    return (
                                        <div className="event-panel">
                                            <img src={require(`../../../assets/events/${item.url}`)} />
                                            <p>{item.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
