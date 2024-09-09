/**
 * @desc 历史活动页面
 * @author
 */
import '../../theme.scss';

import type {} from 'jquery';
import { Component } from 'react';

import eventList from './index.json';

declare global {
    interface JQuery {
        vivaTimeline: (options: object) => JQuery;
    }
}
type EventItem = (typeof eventList)[0] & {
    pos: 'left' | 'right';
    date: string;
};

const pos = { 1: 'left', '-1': 'right' },
    list: EventItem[] = [];
let initPos = -1;

for (const event of eventList) {
    const s = event.time;

    list.unshift({
        ...event,
        pos: pos[(initPos *= -1)],
        date: `${s.slice(0, 4)}年${+s.slice(4, 6)}月${+s.slice(6)}日`
    });
}

export class Events extends Component {
    componentDidMount() {
        $('.VivaTimeline').vivaTimeline({
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
                                {list.map((item, index) => (
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
