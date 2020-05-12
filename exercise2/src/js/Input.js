import React from 'react';

const Input = () => {
  return (
    <div class="form-field">
      <label class="form-field__label" for="codeInput">
        Enter code:
      </label>
      <input id="codeInput" type="text" className="form-field__input" />
    </div>
  );
};

export default Input;
