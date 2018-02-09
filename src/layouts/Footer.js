import React, { Component } from 'react';
import {Row, Col} from 'antd';
import About from './About'

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Row>
          <Col span={16}>
            <h5>线上学习平台</h5>
            <p className="left-content">
              <a href="https://www.freecodecamp.org">英文版：www.freecodecamp.org </a>
            </p>
            <p className="left-content">
              <a href="https://www.freecodecamp.cn">中文版：www.freecodecamp.cn </a>
            </p>
          </Col>
          <Col span={8}>
            <h5>联系我们</h5>
            <About/> 
          </Col>
        </Row>
             
      </footer>
    );
  }
}

export default Footer;
