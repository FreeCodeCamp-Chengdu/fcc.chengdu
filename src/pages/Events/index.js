/**
 * @desc 历史活动页面
 * @author 
*/
import './style.css';
import React, { Component } from 'react';

import * as eventList from './index.json';

class Events extends Component {
    render() {
        return (
            <div className="Panel events">
                <h4>历史活动</h4>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {
                        eventList.map((item, index) => {
                            return <div key={`event-panel-${index}`} className="panel panel-info">
                                <div className="panel-heading" role="tab" id={`heading${index}`}>
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapseOne${index}`} aria-expanded="false" aria-controls={`collapseOne${index}`} >
                                        {`${index}: ${item.title}`}
                                    </a>
                                </div>
                                <div id={`collapseOne${index}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${index}`}>
                                    <div className="panel-body">
                                        <p>时间：{item.time}</p>
                                        <p>地址：{item.address}</p>
                                        <p>描述：{item.describe}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Events;
