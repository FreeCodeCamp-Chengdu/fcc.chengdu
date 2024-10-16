/**
 * @desc 历史活动页面
 * @author
 */
import { Row, Col } from 'react-bootstrap';

import sponsors from './data';
import * as style from './index.module.scss';

export const Sponsors = () => (
    <Row className={style.logolist}>
        {sponsors.map(({ img, title }) => (
            <Col key={img} md={2} xs={4}>
                <img src={img} alt={title} className={style['logo-img']} />
            </Col>
        ))}
    </Row>
);
