import PropTypes from "prop-types";
import React from "react";
import { Input as InputBase } from "antd";
import { Controller, useController } from "react-hook-form";
import classNames from "classnames";

const Input = ({
  name,
  value,
  message,
  control,
  register,
  classes,
  label,
  absolute,
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: register,
    defaultValue: value,
  });
  return (
    <div
      className={classNames("input", {
        input__absolute: absolute,
      })}
    >
      {label ? <label className="input__label">{label} :</label> : null}
      <InputBase
        className={classNames("input__field", [classes], {
          input__error: error,
        })}
        {...field}
        {...rest}
      />
      {error && <span className="input__message">{error.message}</span>}
    </div>
  );
};

Input.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.any,
};
export default Input;
