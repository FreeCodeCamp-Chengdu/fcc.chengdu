import { Carousel, CarouselSlide, Container } from 'idea-react';

import { events } from './events';
import * as styles from './index.module.less';

export const Events = () => (
    <section className={`${styles.events} py-12`}>
        <Container>
            <Carousel
                aria-label="社区大事件"
                auto
                dark
                innerClassName={styles.track}
                controlsPlacement="top"
                controlsStart={<h2 className="text-xl fg-white mb-0">社区大事件</h2>}
                controlsClassName="d-flex flex-wrap justify-content-between align-items-center gap-3 fg-white mb-4"
                itemsGap="1.5rem"
                autoplay
                interval={3000}
                ends="loop"
            >
                {events.map(({ title, url }) => (
                    <CarouselSlide key={url + ''} style={{ width: 'min(100%, 390px)' }}>
                        <img
                            className="d-block w-100 rounded shadow object-fit-cover"
                            src={url + ''}
                            alt={title}
                            width={390}
                            height={220}
                        />
                        <p className="fg-white text-center fw-bold mt-3 mb-0">{title}</p>
                    </CarouselSlide>
                ))}
            </Carousel>
        </Container>
    </section>
);
