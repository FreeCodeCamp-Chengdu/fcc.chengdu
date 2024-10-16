/**
 * @desc 历史活动页面
 * @author
 */
import { Container, Row, Col } from 'react-bootstrap';
import sponsors from './data';
import './style.css';

export const Sponsors = () => (
    <Row className="logolist">
        {sponsors.map(({ img, title }) => (
            <Col key={img} md={2} xs={4}>
                <img src={img} alt={title} className="logo-img" />
            </Col>
        ))}
    </Row>
);
