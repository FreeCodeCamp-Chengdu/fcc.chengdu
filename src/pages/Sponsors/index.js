/**
 * @desc 历史活动页面
 * @author
 */
import React, { Component } from 'react';
import sponsors from './data';
import './style.css';

export const Sponsors = () => (
    <div className="row logolist">
        {sponsors.map(({ img, title }) => (
            <div key={img} className="col-md-2 col-xs-4">
                <img src={img} alt={title} className="logo-img" />
            </div>
        ))}
    </div>
);
