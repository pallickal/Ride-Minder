import React from 'react';
import { Form, Input, Button } from 'stardust';

const VehicleForm = React.createClass({
  getInitialState: function() {
    return {
      year: '',
      make: '',
      model: '',
      trim: '',
      miles: '',
      body_style: '',
      vin: ''
    };
  },
  handleChange: function(e) {
    this.setState({[e.target.name] : e.target.value});
  },
  handleSubmit: function(e) {
    this.props.onSubmit(e, this.state);
    this.setState(this.getInitialState());
  },
  render: function() {
    return (
      <Form>
        <Form.Field label='Make'>
          <Input name='make' placeholder='Chevy, Toyota, Mercedes...' value={this.state.make} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Model'>
          <Input name='model' placeholder='Camaro, Corolla, E350...' value={this.state.model} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Trim'>
          <Input name='trim' placeholder='SS, LE, blank...' value={this.state.trim} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Body Style'>
          <Input name='body_style' placeholder='Coupe, Sedan, Wagon, etc...' value={this.state.body_style} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Year'>
          <Input name='year' placeholder='year' value={this.state.year} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='VIN (Vehicle Identification Number)'>
          <Input name='vin' placeholder='3FAHP0JG9CR338646' value={this.state.vin} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field label='Miles'>
          <Input name='miles' placeholder='miles' value={this.state.miles} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' onClick={ this.handleSubmit }>
          Add Vehicle
        </Button>
      </Form>
    );
  }
});

export default VehicleForm;
