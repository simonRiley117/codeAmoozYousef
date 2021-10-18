import PropTypes from "prop-types";
import React from "react";
import { Checkbox as CheckboxBase } from "antd";
import { Controller } from "react-hook-form";
import classNames from "classnames";

const CheckBox = ({
  name,
  value,
  control,
  errors,
  classes,
  label,
  message,
  messageerror,
  register,
  href,
  ...rest
}) => {
  const error = errors[name];
  return (
    <div className="input">
      <Controller
        name={name}
        control={control}
        rules={register}
        render={({ field }) => (
          <CheckboxBase {...field}>
            {" "}
            <div className="flex items-center">
              {label}{" "}
              <a href={`/${href}`} className="input__Link">
                {message}
              </a>
            </div>
          </CheckboxBase>
        )}
      />
      {error && <span className="input__message">{messageerror}</span>}
    </div>
  );
};

CheckboxBase.propTypes = {
  classes: PropTypes.any,
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  messageerror: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  register: PropTypes.any,
};
export default CheckBox;
