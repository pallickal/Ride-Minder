import React from 'react';
import { Form, Input, Button } from 'stardust';
import store from 'store'

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
      <Form>
        <Form.Field label='Make'>
          <Input name='make' placeholder='Chevy, Toyota, Mercedes...' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Model'>
          <Input name='model' placeholder='Camaro, Corolla, E350...' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Trim'>
          <Input name='trim' placeholder='SS, LE, blank...' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Body Style'>
          <Input name='body_style' placeholder='Coupe, Sedan, Wagon, etc...' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Year'>
          <Input name='year' placeholder='year' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='VIN (Vehicle Identification Number)'>
          <Input name='vin' placeholder='3FAHP0JG9CR338646' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Miles'>
          <Input name='km' placeholder='miles' onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' onClick={this.handleSubmit}>Add Vehicle</Button>
      </Form>
    );
  }
});

export default VehicleForm;
