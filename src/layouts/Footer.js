import React, { Component } from 'react';
//import {Row, Col} from 'antd';
import About from './About'
// import $ from'jquery';
// require('popper.js');
// require ('bootstrap');

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="row">
          <div className="col-7">
            <h5>线上学习平台</h5>
            <p className="left-content">
              <a href="https://www.freecodecamp.org">英文版：www.freecodecamp.org </a>
            </p>
            <p className="left-content">
              <a href="https://www.freecodecamp.cn">中文版：www.freecodecamp.cn </a>
            </p>
          </div>
          <div className="col-5">
            <h5>联系我们</h5>
            <About /> 
          </div>
        </div>
             
      </footer>
    );
  }
}

export default Footer;
