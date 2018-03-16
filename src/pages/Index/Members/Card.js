import React, { Component } from 'react';
import classnames from 'classnames';

export default class Index extends Component {
  showDetail(detailData){
    const {showDetail} = this.props;
    showDetail(detailData);
  }
	render(){
    const {detailData,index} = this.props;
		return(
			<div className={classnames('member-item',{'last-item':index%5===4})}>
        <div className="img-block">
          <img className="card-img-top" src={detailData.img} alt="头像"/>
        </div>
			  <div className="content">
          <h2 className="name text-over">
            {detailData.name}
          </h2>
          <div className="responsibility text-over">
            {detailData.responsibility}
          </div>
          <div className="address text-over">
            <a href={detailData.url} target="_blank">{detailData.url}</a>
          </div>
        </div>
			</div>
		)
	}
}
