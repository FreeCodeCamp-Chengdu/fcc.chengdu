import { Container, Row, Col, Image } from 'react-bootstrap';
import { About } from './About';
import FLogo from '../assets/images/fcc-logo.png';

export const Footer = () => (
    <footer className="Footer">
        <Container fluid className="footer-bg">
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="left-content">
                        <Image src={FLogo} alt="FCC logo" fluid />
                        <p>"人人皆可编程"营造有温度的技术社区</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="right-content">
                        <About />
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="container-fluid info">
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
        </div>
    </footer>
);
