/**
 * @desc 历史活动页面
 * @author
 */
import { Col, Row } from 'idea-react';

import sponsors from './data';
import * as style from './index.module.less';

export const Sponsors = () => (
    <Row className={style.logolist}>
        {sponsors.map(({ img, title }) => (
            <Col key={img} span={4} md={2}>
                <img src={img} alt={title} className={style['logo-img']} />
            </Col>
        ))}
    </Row>
);
