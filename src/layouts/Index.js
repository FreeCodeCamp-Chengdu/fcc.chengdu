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
import Sponsors from '../pages/Sponsors/index';

//图标
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {/* <Menu /> */}
         <div>
          <Router>
            <div>
              <Route exact path="/" component={Index}></Route>
              <Route path="/events" component={Events} ></Route>
              <Route path="/sponsors" component={Sponsors} ></Route>
            </div>
          </Router>

        </div> 
        <Footer />
      </div>
    );
  }
}

export default App;
