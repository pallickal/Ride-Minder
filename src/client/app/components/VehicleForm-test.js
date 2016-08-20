import { shallow, mount } from 'enzyme';
import React from 'react';
import VehicleForm from 'components/VehicleForm'
import { Button, Input } from 'stardust';

describe('VehicleForm component', function() {
  let onSubmit;
  let wrapper;

  let initialState;
  let initialStateKeys;

  let formInputNames;
  let inputs;

  let formMockData;
  let formMockDataKeys;

  beforeEach(function() {
    onSubmit = sinon.spy();
    wrapper = mount(<VehicleForm onSubmit={onSubmit} />);

    initialState = wrapper.instance().getInitialState();
    initialStateKeys = new Set([...Object.keys(initialState)]);

    formInputNames = new Set();
    inputs = wrapper.find('input');
    inputs.forEach((input) => { formInputNames.add(input.props().name) });

    formMockData = {
      'make': 'Lotus',
      'model': 'Exige',
      'trim': 'S',
      'body_style': 'Coupe',
      'year': '2007',
      'vin': 'SCCVA11197HN80584',
      'miles': '36661'
    };
    formMockDataKeys = new Set([...Object.keys(formMockData)]);
  });

  // research whether to remove done if in some cases not needed (synchronous vs asynchronous)

  function inputNodeForName(name) {
    return wrapper.find('input[name="' + name + '"]').at(0).node;
  }

  describe('on mount', function () {
    it('should have a key in the initial state for each form input', function(done) {
      const difference = [...formInputNames].filter((name) => !initialStateKeys.has(name));
      expect(difference).to.be.empty;
      done();
    });

    it('should have a form input for each key in the initial state', function(done) {
      const difference = [...initialStateKeys].filter((key) => !formInputNames.has(key));
      expect(difference).to.be.empty;
      done();
    });

    it('should preload the form inputs with values from the initial state', function(done) {
      initialStateKeys.forEach((key) => {
        const { name, value } = inputNodeForName(key);
        expect(value).to.deep.equal(initialState[name]);
      });
      done();
    });

    it('should have a key in the test data for each form input', function(done) {
      const difference = [...formInputNames].filter((key) => !formMockDataKeys.has(key));
      expect(difference).to.be.empty;
      done();
    });

    it('should have a form input for each key pair in the test data', function(done) {
      const difference = [...formMockDataKeys].filter((key) => !formInputNames.has(key));
      expect(difference).to.be.empty;
      done();
    });

    it('should have test data values that do not match the form values', function(done) {
      [...formMockDataKeys].forEach((key) => {
        expect(formMockData[key]).to.not.deep.equal(inputNodeForName(key).value);
      });
      done();
    });

  });

  function fillFormData() {
    Object.keys(formMockData).forEach(function (key) {
      wrapper.find('input[name="' + key + '"]').simulate('change', {
        target: { name: key, value: formMockData[key] }
      });
    });
  }

  describe('form change propogation', function() {
    beforeEach(function() {
      fillFormData()
    });

    it('should update state onChange', function(done) {
      const state = wrapper.state();
      Object.keys(state).forEach(function (key) {
        expect(state[key]).to.deep.equal(formMockData[key]);
      });
      done();
    });

    it('should propagate state changes to the form', function(done) {
      const state = wrapper.state();
      Object.keys(state).forEach(function (key) {
        expect(inputNodeForName(key).value).to.deep.equal(state[key]);
      });
      done();
    });

  });

  describe('submit behavior', function() {
    function clickSubmit() {
      wrapper.find(Button).simulate('click', { preventDefault() {} });
    }

    beforeEach(function () {
      clickSubmit();
    });

    it('should run the onSubmit click handler on submit', function(done) {
      expect(onSubmit).to.have.property('callCount', 1);
      done();
    });

    it('should reset state to the initial state after submit', (done) => {
      const state = wrapper.state();
      expect(state).to.deep.equal(initialState);
      done();
    });

    it('should reset the form to the initial state after submit', (done) => {
      const state = wrapper.state();
      Object.keys(state).forEach(function (key) {
        expect(inputNodeForName(key).value).to.deep.equal(initialState[key]);
      });
      done();
    });

  });
});
