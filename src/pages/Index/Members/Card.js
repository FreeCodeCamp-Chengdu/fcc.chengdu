import classnames from 'classnames';
import React from 'react';

export const Card = ({ url, img, name, responsibility, urlType, index }) => (
    <div
        className={classnames('member-item', { 'last-item': index % 5 === 4 })}
    >
        <div>
            <div className="img-block">
                <img className="card-img-top" src={img} alt="头像" />
            </div>
            <div className="content">
                <div className="name text-over">{name}</div>
                <div
                    className="responsibility text-over"
                    title={responsibility}
                >
                    {responsibility}
                </div>
                <div className="address text-over">
                    <a className="GithubLink" title={url}>
                        {urlType === 'user' && (
                            <img className="user-icon" src={img} alt="头像" />
                        )}
                        {urlType !== 'none' && (
                            <i className={classnames('iconfont', urlType)} />
                        )}
                        {url}
                    </a>
                </div>
            </div>
        </div>
    </div>
);
