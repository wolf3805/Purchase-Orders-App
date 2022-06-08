import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  id,
  name,
  type,
  label,
  placeholder = null,
  error = null,
  onChange,
  onBlur,
  step = null,
}, ref) => (
  <>
    {label && (
      <label
        htmlFor={id}
        className="form-label"
      >
        {label}
      </label>
    )}
    <input
      ref={ref}
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      className={`input form-control${(error ? ' is-invalid border border-danger' : '')}`}
      placeholder={placeholder}
      step={step}
    />
    {error && (
      <div className="invalid-feedback d-block">
        {error.message}
      </div>
    )}
  </>
));

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
  }),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  step: PropTypes.string,
};
