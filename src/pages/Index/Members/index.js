/**
 * @desc 社区组织者板块
 * @author
 */
import React, {Component} from 'react';
import './style.css';
import Card from './Card';
import MEMBERS from './MembersConfig'
class Index extends Component {
  renderMembers(){
    return <div>
      {MEMBERS.map(item =>{ return <Card detailData={item} key={item.name}/>})}
    </div>
  }
	render() {
		return (
			<div className="members">
				组织者风采展
				{this.renderMembers()}
			</div>
		);
	}
}

export default Index;
