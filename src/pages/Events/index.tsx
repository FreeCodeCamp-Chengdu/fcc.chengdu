/**
 * @desc 历史活动页面
 * @author
 */
import '../../theme.scss';

import { Chrono } from 'react-chrono';

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

export const Events: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Chrono
                        items={items}
                        mode="VERTICAL_ALTERNATING"
                        cardHeight={200}
                        slideShow
                        slideItemDuration={3000}
                        theme={{
                            primary: '#0077B6',
                            secondary: '#48CAE4',
                            cardBgColor: '#CAF0F8',
                            cardForeColor: '#03045E',
                            titleColor: '#023E8A'
                        }}
                        fontSizes={{
                            cardTitle: '1.3rem',
                            cardSubtitle: '1rem',
                            cardText: '0.9rem',
                            title: '1rem'
                        }}
                        classNames={{
                            card: 'my-card',
                            cardMedia: 'my-card-media',
                            cardSubTitle: 'my-card-subtitle',
                            cardText: 'my-card-text',
                            cardTitle: 'my-card-title',
                            title: 'my-title'
                        }}
                        timelinePointShape="circle"
                        lineWidth={3}
                    />
                </div>
            </div>
        </div>
    );
};
