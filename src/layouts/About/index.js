/**
 * @desc 关于我们
 * @author
 */

import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import details from './data'
import './style.css';

import $ from'jquery';
require('popper.js');
require ('bootstrap');
// import {Row, Col, Popover, Button} from 'antd';
class Index extends Component {
  showDetail(img, title){
      return `<div class="detail-img">
              <img src=${img} alt=${title}/>
            </div>`
    }
  render() {
    return (
      <div className="about-container">
        <div>					
          {
            details.map((ele,index) => {
              $(() => {
                $(`#popover${index}`).popover({
                  title: ele.desc,
                  trigger: 'focus',
                  content: this.showDetail(ele.img, ele.title),
                  html: true,
                  placement: 'top'	
                });
              });
              return (							
                <button id={`popover${index}`} type="button" className="btn" data-placement="top">
                  <FontAwesomeIcon icon={["fab", ele.title]}/>
                </button>
              );
            })
          }	
        </div>	
      </div>
    );
  }
}

///////////////////////////////antd///////////////////////////////////
// 	render() {
// 		return (
// 			<div className="about-container">
// 				<Row gutter={16} type="flex" justify="space-around" align="middle">
// 					{
// 						details.map((ele) => {
// 							return <Col className="gutter-row" span={12}>
// 												<Popover title={ele.desc} content={this.showDetail(ele.img, ele.title)} trigger="click" >
// 													<Button  className="detail-button" shape="circle" icon={ele.title} size="large"></Button>
// 												</Popover>
// 											</Col>
// 						})
// 					}
// 				</Row>		
// 			</div>
// 		);
// 	}
// }

export default Index;
