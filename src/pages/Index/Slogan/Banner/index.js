/**
 * @desc Banner
 * @author
 */
import './style.css';
import React, { Component } from 'react';
import bannerIcon from '../../../../assets/images/banner-icon.png';

class Index extends Component {
    render() {
        return (
            <div className="MainContainer BannerContainer">
              <div className="SloganContainer">
                <div className="Slogan">
                    <strong>
                        "人人皆可编程"
                    </strong>
                    营造有温度的技术社区
                </div>
                <div className="SloganContent">
                    立即前往线上学习平台
                </div>
                <div className="MainLink">
                    <a href="http://www.freecodecamp.org/">
                        中文版
                    </a>
                    <a href="http://www.freecodecamp.com/">
                        English version
                    </a>
                </div>
            </div>
            <img className="BannerIcon" src={bannerIcon} />
          </div>
        );
    }
}

export default Index;