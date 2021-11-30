import PropTypes from "prop-types";
import React from "react";
import Input from "@Components/Shared/Inputs/Input";

const SocialInput = ({
  label,
  control,
  errors,
  message,
  name,
  siteAddress,
  ...rest
}) => {
  return (
    <div className="SocialInput">
      <Input
        label={label}
        message={message}
        name={name}
        control={control}
        errors={errors}
        {...rest}
      />
    </div>
  );
};

SocialInput.propTypes = {
  control: PropTypes.any,
  errors: PropTypes.any,
  label: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  siteAddress: PropTypes.string,
};

export default SocialInput;
