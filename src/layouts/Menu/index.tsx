import { Component } from 'react';

import * as style from './index.module.less';

const logo = new URL('../../assets/images/fcc-logo.png', import.meta.url) + '';

export class Menu extends Component {
    componentDidMount() {
        window.onscroll = e => {
            // let top = this.scroll().top || 0;
            // 导航条滚动到一定高度，变换导航栏的背景色和透明度
        };
    }

    render() {
        return (
            <div className={style.Menu}>
                <div className={style.Nav}>
                    <a href="">
                        <img src={logo} />
                    </a>
                    <div>
                        <a href="#/events">历史活动</a>
                        <a href="https://web-conf.dev/" target="_blank">
                            前端大会
                        </a>
                        <a href="https://web-conf.dev/#2018/Code4City/" target="_blank">
                            code for city
                        </a>
                        <a href="#/sponsors">赞助商</a>
                    </div>
                </div>
            </div>
        );
    }
}
