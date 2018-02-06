import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

class App extends Component {
  render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <Menu />
        <div>
          {children ? children : '404'}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
