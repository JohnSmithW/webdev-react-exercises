'use strict';
import React from 'react';

class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '+7 (___)___-__-__',
      template: '+7 (___)___-__-__',
      validation: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const lastNumb = event.target.value[event.target.value.length - 1];
    var storage = this.state.inputValue;
    if (/[\d$]/.test(lastNumb) && event.inputType !== 'deleteContentBackward') {
      storage = storage.replace(/_/, lastNumb);
    }
    if (event.inputType === 'deleteContentBackward') {
      var template = this.state.template;

      for (var i = storage.length - 1; i > 0; i--) {
        if (storage[i] !== template[i]) {
          storage = storage.slice(0, i) + template.slice(i);
          i = 0;
        }
      }
    }
    this.setState({
      inputValue: storage,
    });
    this.props.updateNumber(this.state.inputValue);
  }

  render() {
    return (
      <div class="form-field">
        <label class="form-field__label" for="phoneNumb">
          Phone number
        </label>
        <input class={this.props.class} type="tel" id="phoneNumb" value={this.state.inputValue} onChange={this.handleChange} placeholder="+7 (___)___-__-__" />
        {!this.props.validation && <span class="form-field__error">Please enter the valid number !</span>}
      </div>
    );
  }
}

export default PhoneInput;
