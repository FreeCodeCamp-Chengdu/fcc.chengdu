/**
 * @desc 历史活动页面
 * @author
 */
import '../../theme.scss';

import React, { Component } from 'react';

import eventList from './index.json';

export class Events extends Component {
    constructor() {
        super();

        const pos = { 1: 'left', '-1': 'right' },
            list = [];
        let initPos = -1;

        for (const event of eventList) {
            const s = event.time;

            event.pos = pos[(initPos *= -1)];
            event.date = `${s.slice(0, 4)}年${+s.slice(4, 6)}月${+s.slice(6)}日`;

            list.unshift(event);
        }
        this.state = { list };
    }

    componentDidMount() {
        window.$('.VivaTimeline').vivaTimeline({
            carousel: true,
            carouselTime: 3000
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="VivaTimeline">
                            <dl>
                                {this.state.list.map((item, index) => (
                                    <div key={`event-panel-${index}`}>
                                        <dd
                                            className={`pos-${item.pos} clearfix`}
                                        >
                                            <div className="circ"></div>
                                            <div className="time">
                                                {item.date}
                                            </div>
                                            <div className="events">
                                                <div className="events-header">
                                                    {item.type} - {item.title}
                                                </div>
                                                <div className="events-body">
                                                    <div className="">
                                                        <div className="col-md-6 pull-left">
                                                            <img
                                                                alt={`${item.title}`}
                                                                className="events-object img-responsive img-rounded"
                                                                src={`${item.imageList[0].url}`}
                                                            />
                                                        </div>
                                                        <div className="events-desc">
                                                            {item.describe}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
