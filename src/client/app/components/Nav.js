import React from 'react';
import { Link } from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vehicles"> Vehicles </Link></li>
          <li><Link to="/vehicles/new"> Add Vehicle </Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default Nav;
