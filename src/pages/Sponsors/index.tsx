/**
 * @desc 赞助商页面
 * @author
 */
import { Col, Row } from 'idea-react';

import sponsors from './data';

export const Sponsors = () => (
    <main className="py-5 bg-dark">
        <h1 className="text-center text-white fs-3 mb-5 px-3">感谢以下赞助商对社区的支持</h1>
        <Row className="justify-content-center align-items-center g-4">
            {sponsors.map(({ img, title }) => (
                <Col
                    key={img}
                    span={12}
                    sm={6}
                    lg={4}
                    className="d-flex justify-content-center p-4"
                >
                    <img
                        src={img}
                        alt={title}
                        width={220}
                        height={112}
                        className="mw-100 object-fit-contain"
                    />
                </Col>
            ))}
        </Row>
    </main>
);
