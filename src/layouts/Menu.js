import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/fcc-logo.png';


class Menu extends Component {
  scroll() {
    if (window.pageYOffset != null) {
      //  支持IE9 +
      return {
        left: window.pageXOffset,
        top: window.pageYOffset
      }
    } else if (document.compatMode == 'CSS1Compat') {
      // 声明了DTD

      return {
        left: document.documentElement.scrollLeft,
        top: document.documentElement.scrollTop
      }
    }

    return {
      left: document.body.scrollLeft,
      top: document.body.scrollTop
    }
  }

  componentDidMount() {
    window.onscroll = (e) => {
      let top = this.scroll().top || 0;
      // 导航条滚动到一定高度，变换导航栏的背景色和透明度
    }
  }

  render() {
    return (
      <div className="Menu">
        <div className="Nav">
          <img src={logo} />
          <div>
            <a href="/events">历史活动</a>
            <a href="https://web-conf.tk/" target="_blank">前端大会</a>
            <a href="https://git-dev.leanapp.cn/" target="_blank">code for city</a>
          </div>

        </div>
      </div>
    );
  }
}

export default Menu;
