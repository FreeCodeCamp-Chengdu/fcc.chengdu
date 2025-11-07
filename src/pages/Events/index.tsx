/**
 * @desc 历史活动页面
 * @author
 */
import '../../theme.less';

import { FC } from 'react';
import { Chrono, TimelineProps } from 'react-chrono';
import { Container, Row, Col } from 'react-bootstrap';

import eventList from '../../../tool/index.json';

type EventItem = (typeof eventList)[0] & {
    date: string;
};

const list: EventItem[] = eventList
    .map(event => ({
        ...event,
        date: `${event.time.slice(0, 4)}年${+event.time.slice(4, 6)}月${+event.time.slice(6)}日`
    }))
    .reverse();

const items: TimelineProps['items'] = list.map(
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
            <Col xs={12}>
                <Chrono
                    items={items}
                    mode="alternating"
                    layout={{ cardHeight: 200, lineWidth: 3 }}
                    animation={{ slideshow: { enabled: true, duration: 3000 } }}
                    theme={{
                        primary: '#0077B6',
                        secondary: 'secondary',
                        cardBgColor: 'bg-light',
                        titleColor: 'text-primary'
                    }}
                    style={{
                        fontSizes: {
                            cardTitle: '1.3rem',
                            cardSubtitle: '1rem',
                            cardText: '0.9rem',
                            title: '1rem'
                        }
                    }}
                    display={{ pointShape: 'circle' }}
                />
            </Col>
        </Row>
    </Container>
);
