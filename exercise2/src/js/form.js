'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PhoneInput from './PhoneInput.js';
import Input from './Input.js';
import Button from './Button.js';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passed: false,
      isValidated: true,
      number: '_',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
  }

  handleSubmit() {
    if (this.state.number.includes('_')) {
      this.setState({
        isValidated: false,
      });
    } else {
      this.setState({
        isValidated: true,
        passed: true,
      });
    }
  }

  updateNumber(number) {
    this.setState({
      number: number,
    });
  }

  render() {
    return (
      <div class="main">
        <div class="form-title-block">
          <span class="form-title-block__item">Registration</span>
        </div>
        <form class="form">
          <div class="form-field">
            <label class="form-field__label" for="name">
              Full name
            </label>
            <input class="form-field__input" type="text" id="name" placeholder="First and Last name" />
            <span class="form-field__error form-field__error_visible">fill your full name !</span>
          </div>
          <PhoneInput
            validation={this.state.isValidated}
            updateNumber={this.updateNumber}
            class={this.state.isValidated ? 'form-field__input' : 'form-field__input form__input_validation'}
          />
          {this.state.passed && <Input />}
          <Button text="submit" handleSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Form;
