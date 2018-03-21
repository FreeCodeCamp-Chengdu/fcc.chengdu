import React, { Component } from 'react';
import classnames from 'classnames';

export default class Index extends Component {
  showDetail(detailData) {
    const { showDetail } = this.props;
    showDetail(detailData);
  }
  render() {
    const { detailData, index } = this.props;
    return (
      <a href={detailData.url} className={classnames('member-item', { 'last-item': index % 5 === 4 })} target="_blank">
        <div >
          <div className="img-block">
            <img className="card-img-top" src={detailData.img} alt="头像" />
          </div>
          <div className="content">
            <div className="name text-over">
              {detailData.name}
            </div>
            <div className="responsibility text-over" title={detailData.responsibility}>
              {detailData.responsibility}
            </div>
            <div className="address text-over">
              <a className="GithubLink" title={detailData.url}><i className="iconfont icon-github"></i>{detailData.url}</a>
            </div>
          </div>
        </div>
      </a>
    )
  }
}
