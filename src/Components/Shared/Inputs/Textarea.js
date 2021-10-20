import PropTypes from "prop-types";
import React from "react";
import { Input as InputBase } from "antd";
import { Controller } from "react-hook-form";
import classNames from "classnames";

const { TextArea } = InputBase;

const InputTextArea = ({
  name,
  value,
  message,
  control,
  register,
  errors,
  classes,
  label,
  rows,
  ...rest
}) => {
  const error = errors[name];
  return (
    <div className="input text-right ">
      <label className="input__label">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={register}
        defaultValue={value}
        render={({ field }) => (
          <TextArea
            className={classNames("input__field", [classes], {
              input__error: error,
            })}
            {...field}
            {...rest}
            rows={rows}
          />
        )}
      />
      {error && <span className="input__message">{message}</span>}
    </div>
  );
};

InputTextArea.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.any,
  rows: PropTypes.any,
};
export default InputTextArea;
