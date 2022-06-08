import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
  submit = false,
  color = null,
  children,
  onClick = null,
}) {
  return (
    <button type={submit ? 'submit' : 'button'} className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  submit: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
