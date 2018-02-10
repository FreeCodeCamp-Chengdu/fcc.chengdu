/**
 * @desc 历史活动页面
 * @author 
 */
import React, { Component } from 'react';

import * as eventList from './index.json';

class Events extends Component {
    render() {
        return (
            <div className="Panel">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {
                        eventList.map((item, index) => {
                            return <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                              <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  {item.title}
                                </a>
                              </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                {item.describe}
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
