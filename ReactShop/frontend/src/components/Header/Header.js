
import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <div >
          <Navigation/>

      </div>
    );
  }
}

export default connect()(Header);
