/**
 * @desc 宗旨、理念
 * @author
 */

import './style.scss';
import bannerIcon from '../../../assets/images/banner-icon.png';

export const Slogan = () => (
    <div className="Panel index-slogan">
        <div className="MainContent">
            <div className="MainContainer BannerContainer">
                <div className="SloganContainer">
                    <blockquote className="Slogan">
                        <strong>"人人皆可编程"</strong>
                        <span>营造有温度的技术社区</span>
                    </blockquote>
                    <div className="SloganContent">立即前往线上学习平台</div>
                    <div className="MainLink">
                        <a
                            href="https://www.freecodecamp.org/chinese/"
                            target="_blank"
                        >
                            中文版
                        </a>
                        <a href="https://www.freecodecamp.org/" target="_blank">
                            English version
                        </a>
                    </div>
                </div>
                <img className="BannerIcon" src={bannerIcon} />
            </div>
        </div>
    </div>
);
