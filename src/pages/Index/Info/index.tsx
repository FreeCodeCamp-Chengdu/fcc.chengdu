/**
 * @desc 社区介绍板块
 * @author
 */
import './style.scss';

import { Row, Col } from 'react-bootstrap';

const info1 = new URL('../../../assets/images/info1.png', import.meta.url) + '';
const info2 = new URL('../../../assets/images/info2.png', import.meta.url) + '';

export const Info = () => (
    <div className="Panel index-info">
        <div className="info-row">
            <Row>
                <Col xs={12} md={5} className="ImagePanel">
                    <img src={info2} alt="Info 2" />
                </Col>
                <Col xs={12} md={7} className="info-panel">
                    <h3 className="title">freeCodeCamp 是什么？</h3>
                    <p>
                        freeCodeCamp(简称FCC)  是由美国的 Quincy Larson
                        发起的开源项目，截止2018.02.03，在 Github
                        上获得29+万Star(排名第一)。有长达 1600 小时的课程，
                        并且是基于浏览器、课程免费、证书免费、结合了游戏化闯关的乐趣。FCC是一个在160多个国家和2000多个城市的拥有与100w
                        +开发者的社区。
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} className="info-panel">
                    <h3 className="title">FCC成都社区</h3>
                    <p>
                        FCC 成都社区,
                        成立于2016年6月，是一个非营利性的公益性技术社区，是由一群热血有志青年爱好者，利用个人业余休息时间组建而成的技术社区，目的是为了搭建一个友好的交流、学习、互助的社区，帮助成都市众多的开发者，技术爱好者提升个人技术能力。社区致力于做西南地区首个有温度与情怀的技术社区，鼓励人人皆可编程实现个人梦想。
                    </p>
                </Col>
                <Col xs={12} md={4} className="ImagePanel">
                    <img src={info1} alt="Info 1" />
                </Col>
            </Row>
        </div>
    </div>
);
