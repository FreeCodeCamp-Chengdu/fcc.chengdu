/**
 * @desc 社区组织者板块
 * @author
 */
import { Col, Container, Row } from 'idea-react';

import * as styles from './index.module.less';
import { Card } from './Card';
import { MEMBERS } from './MembersConfig';

export const Members = () => (
    <div className={styles['members-block']}>
        <Container className={styles.members}>
            <h2 className={styles.title}>组织者风采展</h2>
            <h3 className={styles['sub-title']}>Community members</h3>

            <Row as="ul" className={styles['members-list']} xs={1} md={2} lg={5}>
                {MEMBERS.map(item => (
                    <Col as="li" key={item.name}>
                        <Card {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
);
