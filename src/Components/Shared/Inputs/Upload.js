import React, {useState, forwardRef} from 'react';
// import IconBtn from '@Components/Shared/Buttons/IconBtn';

import {ReactComponent as PdfIcon} from '@Assets/Icons/tutorialpdf.svg';
// import {ReactComponent as TrashIcon} from '@Assets/Icons/Trash.svg';

const Upload = forwardRef((props, ref) => {
    const {value, message, register, label, id, ...rest} = props;
    const [uploadValue, setuploadValue] = useState(value);
    const [fileName, setFileName] = useState(value?.split('/').pop());
    const handleChange = ({target}) => {
        setuploadValue(target.files[0]);
        setFileName(target.files[0].name);
    };

    return (
        <div className='Upload'>
            <label className='input__label' style={{display:'flex'}}>{label} :</label>
            <div className='d-flex-align my-4 '>
                <label htmlFor={id} className='label__button--primary'>
                    انتخاب فایل
                </label>

                <input
                    ref={ref}
                    type='file'
                    onInput={handleChange}
                    onFocus={(e) => (e.target.placeholder = '')}
                    className='upload__input'
                    {...rest}
                    // defaultValue={convertToFile()}
                    // این پارامتر رو بهش پاس ندادی
                    id={id}
                />
                {fileName && (
                    <div className='upload__preview'>
                        {/*<IconBtn title='حذف' danger icon={<TrashIcon/>}/>*/}
                        <p>{fileName}</p>
                        <div className='upload__preview--icon'>
                            <PdfIcon/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Upload;