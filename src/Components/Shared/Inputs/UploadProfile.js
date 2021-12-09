import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '@Components/Shared/Buttons/Button';

const UploadProfile = ({ register, defaultImage, ...rest }) => {

	return (
		<div className='profile__uploader col-span-2 relative'>
			<div className='UploadProfile--uploadcoverbox flex flex-col items-start'>
				<label className='UploadProfile__label' for='image__cover--perview'>
					آپلود رزومه:
				</label>
				<div className='flex items-center UploadProfile__uploadBox	'>
					
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
