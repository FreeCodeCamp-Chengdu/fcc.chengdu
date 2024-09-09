/**
 * @desc 社区组织者板块
 * @author
 */
import { Component } from 'react';

import './style.scss';
import { Card } from './Card';
import { MEMBERS } from './MembersConfig';

export class Members extends Component {
    renderMembers() {
        return (
            <div className="members-list">
                {MEMBERS.map((item, index) => (
                    <Card {...item} index={index} key={item.name} />
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="members-block">
                <div className="members">
                    <h2 className="title">组织者风采展</h2>
                    <h3 className="sub-title">Community members</h3>
                    {this.renderMembers()}
                </div>
            </div>
        );
    }
}
