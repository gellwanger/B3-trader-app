import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      handleClick,
      children,
      typeBtn,
      classNameStyle,
    } = this.props;

    return (
      <button
        className={classNameStyle}
        onClick={handleClick}
        type={typeBtn ? 'submit' : 'button'}
      >
        {children}
      </button>
    );
  }
}

export default Button;
