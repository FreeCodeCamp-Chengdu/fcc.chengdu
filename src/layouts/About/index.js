/**
 * @desc 关于我们
 * @author
 */

import React, { Component } from 'react';
import details from './data'
import './style.scss';

class Index extends Component {
	render() {

		return (
			<div className="about-container">
				{
					details && details.map((ele, index) => {
						return (
							<div className="about-panel">
								<div className="detail-img" >
									<img src={ele.img} />
								</div>
								<button id={`popover${index}`} type="button" className="btn" data-placement="top">
									<i className={`iconfont ${ele.icon}`}></i>
								</button>
							</div>
						)
					})
				}
			</div>
		);
	}
}

export default Index;
