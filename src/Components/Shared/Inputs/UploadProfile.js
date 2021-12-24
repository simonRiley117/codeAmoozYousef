import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";
import { ReactComponent as PlusIcon } from "@Assets/Icons/plus.svg";
import { Controller } from "react-hook-form";

const UploadProfile = forwardRef(({ defaultImage, label, ...rest }, ref) => {
  const [imagePreviewUrl, setstateimagePreviewUrl] = useState("");

  const [coverfile, setcover] = useState(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setcover(file);

    reader.onloadend = () => {
      setstateimagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="profile__uploader  relative">
      <div className="profile__uploader--cover">
        <label htmlFor="image__cover--perview">
          {coverfile ? (
            <img
              alt="imagePreview"
              className="imagePreview"
              src={imagePreviewUrl}
            />
          ) : (
            <img
              alt="imagePreview"
              className="imagePreview"
              src={defaultImage}
            />
          )}
        </label>
      </div>
      <div className="UploadProfile--uploadcoverbox">
        <input
          type="file"
          accept=".png , .jpg"
          className="UploadProfile__input "
          id="image__cover--perview"
          onInput={handleImageChange}
          onFocus={(e) => (e.target.placeholder = "")}
          ref={ref}
          // defaultValue={convertToFile()}
          {...rest}
        />
        <span className="UploadProfile__label" htmlFor="image__cover--perview">
          <PlusIcon />
        </span>
      </div>
    </div>
  );
});

UploadProfile.propTypes = {
  defaultImage: PropTypes.string,
  register: PropTypes.any,
};

export default UploadProfile;
