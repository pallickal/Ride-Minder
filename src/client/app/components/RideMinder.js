import React from 'react';
import { Link } from 'react-router';

const RideMinder = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/vehicles"> Vehicles </Link>
          <Link to="/create"> Create </Link>
        </div>
        Welcome to Ride Minder.
        {this.props.children}
      </div>
    );
  }
});

export default RideMinder;
