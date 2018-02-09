import React, { Component } from 'react';

import Slogan from './Slogan';
import Info from './Info';
import Events from './Events';
import Members from './Members';

class Index extends Component {
    render() {
        return (
            <div className="Content">
                <Slogan />
                <Info />
                <Events />
                {/* <Members /> */}
            </div>
        );
    }
}

export default Index;
