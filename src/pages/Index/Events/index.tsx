/**
 * @desc 大事件记录、展示板块
 * @author
 */
import { Component, createRef, RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { events } from './events';
import './style.scss';

export class Events extends Component {
    private swiperRef: RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.swiperRef = createRef();
    }

    componentDidMount() {
        this.setMarginLeft();
        window.addEventListener('resize', this.setMarginLeft);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setMarginLeft);
    }

    setMarginLeft = () => {
        const bodyWidth = document.body.clientWidth,
            panelWidth =
                document.querySelector('#index-events')?.clientWidth || 0;

        const contentEvents =
            document.querySelector<HTMLElement>('.content-events');

        if (contentEvents)
            contentEvents.style.marginRight = `${(panelWidth - bodyWidth) / 2}px`;
    };

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
                        <div className="events-slider" ref={this.swiperRef}>
                            <i
                                id="swiper-button-prev"
                                className="iconfont icon-jiantou1-copy-copy-copy"
                            />
                            <i
                                id="swiper-button-next"
                                className="iconfont icon-jiantou1-copy"
                            />
                            <Swiper
                                className="swiper-container"
                                modules={[Navigation, Autoplay]}
                                grabCursor
                                slidesPerView={3}
                                centeredSlides={false}
                                slidesPerGroup={1}
                                spaceBetween={65}
                                loop
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false
                                }}
                                navigation={{
                                    nextEl: '#swiper-button-next',
                                    prevEl: '#swiper-button-prev'
                                }}
                            >
                                {events.map(({ title, url }) => (
                                    <SwiperSlide
                                        key={url + ''}
                                        className="event-panel"
                                    >
                                        <img src={url + ''} alt={title} />
                                        <p className="text-white">{title}</p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
