/**
 * @desc 关于我们
 * @author
 */

import React, {Component} from 'react';
import {Row, Col, Popover, Button} from 'antd';
import details from './data'
import './style.css';
class Index extends Component {
  showDetail(img, title){
    return <div class="detail-img">
            <img src={img} alt={title}/>
          </div>
  }
	render() {
		return (
			<div className="about-container">
				<Row gutter={16} type="flex" justify="space-around" align="middle">
					{
						details.map((ele) => {
							return <Col className="gutter-row" span={12}>
												<Popover title={ele.desc} content={this.showDetail(ele.img, ele.title)} trigger="click" >
													<Button  className="detail-button" shape="circle" icon={ele.title} size="large"></Button>
												</Popover>
											</Col>
						})
					}
				</Row>		
			</div>
		);
	}
}

export default Index;
