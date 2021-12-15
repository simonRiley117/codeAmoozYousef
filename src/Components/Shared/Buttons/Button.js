import PropTypes from "prop-types";
import React from "react";
import { Button as ButtonBase } from "antd";
import classNames from "classnames";

const Button = ({
  type,
  classes,
  large,
  success,
  disabled,
  children,
  ...rest
}) => {
  return (
    <ButtonBase
      type={type}
      className={classNames(`button button__${type}`, [classes], {
        large: large,
        success: success,
        disabled: disabled,
      })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonBase>
  );
};
Button.defaultProps = {
  type: "default",
  large: false,
  success: false,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  large: PropTypes.bool,
  ico: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOfType(
    [PropTypes.oneOf(["primary", "default", "text", "gradient"])],
    PropTypes.string.isRequired
  ),
};
export default Button;
