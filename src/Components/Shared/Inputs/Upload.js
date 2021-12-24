import React, {useState, forwardRef, useEffect} from 'react';
// import IconBtn from '@Components/Shared/Buttons/IconBtn';

import {ReactComponent as PdfIcon} from '@Assets/Icons/tutorialpdf.svg';
import useFetch from "../../../Context/useFetch";
// import {ReactComponent as TrashIcon} from '@Assets/Icons/Trash.svg';

const Upload = forwardRef((props, ref) => {
    console.log('UPLOAD: ', props)
    const {value, isSubmitted, message, error, label, id, ...rest} = props;
    const [fileName, setFileName] = useState(value?.split('/').pop());
    const handleChange = ({target}) => {
        setFileName(target.files[0].name);
    };

    useEffect(() => {
        if (isSubmitted) {
            setFileName('')
        }
    }, [isSubmitted])

    return (
        <div className='Upload'>
            <label className='input__label' style={{display: 'flex'}}>
                {label} :
            </label>
            <div className='d-flex-align my-4 '>
                <label htmlFor={id} className='label__button--primary'>
                    انتخاب فایل
                </label>

                <input
                    ref={ref}
                    type='file'
                    onInput={handleChange}
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
            {error && <span className='input__message'>{message}</span>}
        </div>
    );
});

export default Upload;
