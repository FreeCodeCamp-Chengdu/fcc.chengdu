import { Col, Container, Image, Row } from 'react-bootstrap';

import FLogo from '../../assets/images/fcc-logo.png';
import { About } from '../About';
import * as styles from './index.module.scss';

export const Footer = () => (
    <footer className={styles.Footer}>
        <Container fluid className={styles['footer-bg']}>
            <Row className="align-items-center">
                <Col md={6}>
                    <div className={styles['left-content']}>
                        <Image src={FLogo} alt="FCC logo" fluid />
                        <p>"人人皆可编程"营造有温度的技术社区</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles['right-content']}>
                        <About />
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.info}>
            <Row>
                <Col md={6}>
                    <p className="text-md-start">
                        版权所有©2018 FCC成都社区保留
                    </p>
                </Col>
                <Col md={6}>
                    <p className="text-md-end">FCC成都社区</p>
                </Col>
            </Row>
        </Container>
    </footer>
);
