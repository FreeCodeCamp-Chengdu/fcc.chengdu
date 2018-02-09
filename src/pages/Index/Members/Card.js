import React, { Component } from 'react';

export default class Index extends Component {
	constructor(props){
		super(props);

	}
  showDetail(detailData){
    const {showDetail} = this.props;
    showDetail(detailData);
  }
	render(){
    const {detailData} = this.props;
		return(
			<div className="card col-sm-6 col-lg-2">
			  <img className="card-img-top" src={detailData.img} alt="Card image cap"/>
			  <div className="card-body">
			    <h5 className="card-title">{detailData.name}</h5>
			  </div>
			  <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>个人职责</span>
            <span>{detailData.responsibility}</span>
          </li>
			    <li className="list-group-item">
            <span>个人主页</span>
            <a href={detailData.url}>{detailData.url}</a>
          </li>
			  </ul>
			  <div className="card-body">
				<a onClick={e => {this.showDetail(detailData)}} className="btn btn-primary">Show Detail</a>
			  </div>
			</div>
		)
	}
}
