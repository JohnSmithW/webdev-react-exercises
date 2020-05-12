import React, { useState } from 'react';

function Button(props) {
  return (
    <button
      onClick={() => {
        props.handleSubmit();
      }}
      className="form__button"
      type="button">
      {props.text}
    </button>
  );
}

export default Button;
