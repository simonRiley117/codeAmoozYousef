import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "@Components/Shared/Buttons/Button";

const UploadProfile = ({ register, defaultImage, ...rest }) => {
  const [imagePreviewUrl, setstateimagePreviewUrl] = useState("");
  const [imagePreview, setstateimagePreviewl] = useState("");
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setstateimagePreviewl(file);
    reader.onloadend = () => {
      setstateimagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="profile__uploader col-span-2 relative">
      <div className="UploadProfile--uploadcoverbox flex flex-col items-start">
        <label className="UploadProfile__label" for="image__cover--perview">
          آپلود رزومه:
        </label>
        <div className="flex items-center UploadProfile__uploadBox	">
          <input
            type="file"
            accept=".pdf"
            rules={register}
            name="cover"
            className="custom-file-input "
            id="image__cover--perview"
            onInput={handleImageChange}
            onFocus={(e) => (e.target.placeholder = "")}
            {...rest}
          />
          <p className="UploadProfile__txt">
            {imagePreview && imagePreview.name}
          </p>
        </div>
      </div>
    </div>
  );
};

UploadProfile.propTypes = {
  defaultImage: PropTypes.any,
  register: PropTypes.any,
};

export default UploadProfile;
