import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      idLabel,
      textLabel,
      nameInput,
      placeholderInput,
      handleInputChange,
      typeInput,
      classInput,
      valueInput,
    } = this.props;

    return (
      <label htmlFor={ idLabel }>
        <span>{ textLabel }</span>
        <input
          id={ idLabel }
          name={ nameInput }
          placeholder={ placeholderInput }
          onChange={ handleInputChange }
          type={ typeInput }
          className={ classInput }
          value={ valueInput }
        />

      </label>
    );
  }
}

export default Input;
