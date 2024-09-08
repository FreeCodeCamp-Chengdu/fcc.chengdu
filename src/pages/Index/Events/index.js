/**
 * @desc 大事件记录、展示板块
 * @author
 */
import './style.scss';
import React, { Component } from 'react';

import { events } from './events';

export class Events extends Component {
    componentDidMount() {
        new window.Swiper('.swiper-container', {
            grabCursor: true,
            setWrapperSize: true,
            roundLengths: true,
            a11y: true, // 无障碍
            autoplay: true,
            slidesPerView: 'auto',
            loopedSlides: events.length,
            centeredSlides: false,
            slidesPerGroup: 1,
            spaceBetween: 65,
            loop: true,
            navigation: {
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev'
            }
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // }
        });
    }

    setMarginLeft() {
        const bodyWidth = document.body.clientWidth,
            panelWidth = document.querySelector('#index-events').clientWidth;

        document.querySelector('.content-events').marginRight =
            (panelWidth - bodyWidth) / 2 + 'px';
    }

    render() {
        return (
            <div className="Panel index-events">
                <div className="MainContainer" id="index-events">
                    {/* 标题 */}
                    <div className="TitleRow">
                        <div className="title-panel">
                            <strong>社区大事件</strong>
                            <div className="preloader">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="title-panel-bg">
                            <p>Big</p>
                            <p>even</p>
                        </div>
                    </div>

                    <div className="content-events">
                        <div className="events-slider">
                            <i
                                id="swiper-button-prev"
                                className="iconfont icon-jiantou1-copy-copy-copy"
                            />
                            <i
                                id="swiper-button-next"
                                className="iconfont icon-jiantou1-copy"
                            />
                            <div className="swiper-container">
                                <div
                                    className="swiper-wrapper slider-content"
                                    style={{ width: events.length * 455 }}
                                >
                                    {events.map(({ title, url }) => (
                                        <div
                                            key={url}
                                            className="swiper-slide event-panel"
                                        >
                                            <div>
                                                <img src={url} />
                                                <p>{title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <div class="swiper-scrollbar"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
