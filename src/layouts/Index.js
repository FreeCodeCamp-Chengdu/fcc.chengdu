/**
 * @desc 页面结构
 * @author 
 */
import './style.css';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
// 页面框架
import Menu from './Menu';
import Footer from './Footer';
// 路由页面
import Index from '../pages/Index/index';
import Events from '../pages/Events/index';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Menu />
        {/* <Router>
          <div>
            <Route exact path="/" component={Index}></Route>
            <Route path="/events" component={Events} ></Route>
          </div>
        </Router> */}
        <Footer />
      </div>
    );
  }
}

export default App;
