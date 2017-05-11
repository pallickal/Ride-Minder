import React from 'react';

const Vehicle = React.createClass({
  render: function() {
    return (
      <div>
        <h2> {this.props.year} {this.props.make} {this.props.model} </h2>
        {this.props.miles} miles
        <p>{this.props.vin}</p>
      </div>
    );
  }
});

export default Vehicle;
