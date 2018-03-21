/**
 * @desc 大事件记录、展示板块
 * @author 
 */
import './style.css';
import React, { Component } from 'react';

const Events = require('./events.json');


class Index extends Component {
    constructor() {
        super();
        this.state = {
            eventLists: Events.events
        }
    }

    componentDidMount() {
        var mySwiper = new window.Swiper('.swiper-container', {
            grabCursor: true,
            setWrapperSize: true,
            roundLengths: true,
            a11y: true, // 无障碍
            autoplay: true,
            slidesPerView: 'auto',
            loopedSlides: this.state.eventLists.length,
            centeredSlides: false,
            slidesPerGroup: 1,
            spaceBetween: 65,
            loop: true,
            navigation: {
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev',
            }
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // }
        });
    }
    
    setMarginLeft() {
        let bodyWidth = document.body.clientWidth;
        let panelWidt = document.getElementById("index-events").clientWidth;
        document.getElementsByClassName("content-events").marginRight = (panelWidt - bodyWidth) / 2 + 'px';
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
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="title-panel-bg">
                            <p>Big</p>
                            <p>even</p>
                        </div>
                    </div>

                    <div className="content-events">
                        <div className="events-slider">
                            <i id="swiper-button-prev" className="iconfont icon-jiantou1-copy-copy-copy"></i>
                            <i id="swiper-button-next" className="iconfont icon-jiantou1-copy"></i>
                            <div className="swiper-container">
                                <div className="swiper-wrapper slider-content" style={{ width: Events.length * 455 }}>
                                    {
                                        Events && Events.events.map((item, index) => {
                                            return (
                                                <div className="swiper-slide event-panel">
                                                    <div className="">
                                                        <img src={require(`../../../assets/events/${item.url}`)} />
                                                        <p>{item.title}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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

export default Index;