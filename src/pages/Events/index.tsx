/**
 * @desc 历史活动页面
 * @author
 */
import '../../theme.scss';

import { FC } from 'react';
import { Chrono } from 'react-chrono';
import { Container, Row, Col } from 'react-bootstrap';

import eventList from './index.json';

type EventItem = (typeof eventList)[0] & {
    date: string;
};

const list: EventItem[] = eventList
    .map(event => ({
        ...event,
        date: `${event.time.slice(0, 4)}年${+event.time.slice(4, 6)}月${+event.time.slice(6)}日`
    }))
    .reverse();

const items = list.map(
    ({ type, title, date, describe, imageList: [{ url = '' } = {}] }) => ({
        title: date,
        cardTitle: `${type} - ${title}`,
        cardSubtitle: describe,
        cardDetailedText: describe,
        media: { type: 'IMAGE', source: { url } }
    })
);

export const Events: FC = () => (
    <Container>
        <Row>
            <Col className="col-12">
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={200}
                    slideShow
                    slideItemDuration={3000}
                    theme={{
                        primary: 'primary',
                        secondary: 'secondary',
                        cardBgColor: 'bg-light',
                        cardForeColor: 'text-dark',
                        titleColor: 'text-primary'
                    }}
                    fontSizes={{
                        cardTitle: '1.3rem',
                        cardSubtitle: '1rem',
                        cardText: '0.9rem',
                        title: '1rem'
                    }}
                    timelinePointShape="circle"
                    lineWidth={3}
                />
            </Col>
        </Row>
    </Container>
);
