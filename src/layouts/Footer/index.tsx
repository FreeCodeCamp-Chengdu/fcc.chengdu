import { Col, Container, Image, Row } from 'idea-react';

import { About } from '../About';
import * as styles from './index.module.less';

const FLogo = new URL('../../assets/images/fcc-logo.png', import.meta.url) + '';

export const Footer = () => (
    <footer className={`${styles.Footer} d-flex flex-column justify-content-between`}>
        <Container fluid className={styles['footer-bg']}>
            <Row className="align-items-center" xs={1} md={2}>
                <Col>
                    <div className={`${styles['left-content']} text-center lg:text-start`}>
                        <Image src={FLogo} alt="FCC logo" fluid />
                        <p>"人人皆可编程"营造有温度的技术社区</p>
                    </div>
                </Col>
                <Col>
                    <div
                        className={`${styles['right-content']} text-center lg:text-end pe-0 lg:pe-3`}
                    >
                        <About />
                    </div>
                </Col>
            </Row>
        </Container>
        <div
            className={`${styles.info} d-flex flex-column md:flex-row justify-content-center align-items-center gap-6 p-6`}
        >
            <span>版权所有 ©2018 fCC 成都社区保留</span>
            <span>fCC 成都社区</span>
        </div>
    </footer>
);
