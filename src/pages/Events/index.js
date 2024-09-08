/**
 * @desc 历史活动页面
 * @author 
*/
import './style.scss';

import React, { Component } from 'react';

import * as eventList from './index.json';

class Events extends Component {
    constructor() {
        super();
        let pos = {
            '1': 'left',
            '-1': 'right',
        };
        let list = [];
        let initPos = -1;
        for (let k in eventList) {
            let s = eventList[k].time.split('');
            initPos *= -1;
            eventList[k].pos = pos[`${initPos}`];
            eventList[k].date = `${s[2]}${s[3]}年${s[4] || ''}${s[5]}月${s[6] || ''}${s[7]}日`;
            list.unshift(eventList[k]);
        }
        this.state = {
            list
        };
    }

    componentDidMount(){
        window.$(document).ready(function () {
            window.$('.VivaTimeline').vivaTimeline({
                carousel: true,
                carouselTime: 3000
            });
        })
    }

    render() {
        return (
            <div className="container">
                <link rel="stylesheet" type="text/css" href="css/jquery.eeyellow.Timeline.css" />
                <div className="row">
                    <div className="col-md-12">
                        <div className="VivaTimeline">
                            <dl>
                                {
                                    this.state.list.map((item, index) => {
                                        return <div key={`event-panel-${index}`} >

                                            <dd className={`pos-${item.pos} clearfix`}>
                                                <div className="circ"></div>
                                                <div className="time">{item.date}</div>
                                                <div className="events">
                                                    <div className="events-header">{item.type} - {item.title}</div>
                                                    <div className="events-body">
                                                        <div className="">
                                                            <div className="col-md-6 pull-left">
                                                                <img alt={`${item.title}`} className="events-object img-responsive img-rounded" src={`${item.imageList[0].url}`} />
                                                            </div>
                                                            <div className="events-desc">
                                                                {item.describe}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dd>
                                        </div>
                                    })
                                }
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
