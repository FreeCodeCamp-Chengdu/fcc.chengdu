import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" style={styles.app}>
            底部
      </footer>
    );
  }
}

const styles = {
    app: {
        color: 'red'
    }
}

export default Footer;
