import React from 'react';
import store from '../store'

store.dispatch({
  type: 'ADD_VEHICLE',
  vin: '1KZ3432R72Q3KS2031',
  make: 'Subaru',
  model: 'BRZ',
  trim: 'Limited',
  year: 2016,
  km: 2500
});

const VehicleForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      year: '',
      make: '',
      model: '',
      trim: '',
      miles: '',
      vin: ''
    };
  },
  handleChange: function(e) {
    this.setState({[e.target.name] : e.target.value})
  },
  handleSubmit: function(e) {
    store.dispatch({
      type: 'ADD_VEHICLE',
      vin: this.state.vin,
      make: this.state.make,
      model: this.state.model,
      trim: this.state.trim,
      year: this.state.year,
      km: this.state.km
    });
    e.preventDefault();
    console.log('submitted!');
    console.log(store.getState());
  },
  render: function() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input><br/>
          <label>Year:</label>
          <input type='text' name='year' value={this.state.year} onChange={this.handleChange}></input><br/>
          <label>Make:</label>
          <input type='text' name='make' value={this.state.make} onChange={this.handleChange}></input><br/>
          <label>Model:</label>
          <input type='text' name='model' value={this.state.model} onChange={this.handleChange}></input><br/>
          <label>Trim:</label>
          <input type='text' name='trim' value={this.state.trim} onChange={this.handleChange}></input><br/>
          <label>Miles:</label>
          <input type='text' name='miles' value={this.state.miles} onChange={this.handleChange}></input><br/>
          <label>VIN:</label>
          <input type='text' name='vin' value={this.state.vin} onChange={this.handleChange}></input><br/>
          <button type='submit' onClick={this.handleSubmit}>Add Vehicle</button>
        </form>
      </div>
    );
  }
});

export default VehicleForm;
