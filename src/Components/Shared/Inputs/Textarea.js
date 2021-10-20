import React from 'react';
import { Input as InputBase } from 'antd';
import { Controller } from 'react-hook-form';
import classNames from 'classnames';

const Textarea = ({
                      name,
                      value,
                      message,
                      control,
                      register,
                      errors,
                      id,
                      label,
                      ...rest
                  }) => {
    const error = errors[name];
    return (
        <div className='input col-span-2' id={id}>
            <label className='input__label'>{label} :</label>

            <Controller
                name={name}
                control={control}
                rules={register}
                defaultValue={value}
                render={({ field }) => (
                    <InputBase.TextArea
                        className={classNames('input__field', {
                            input__error: error,
                        })}
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        {...field}
                        {...rest}
                    />
                )}
            />
            {error && <span className='input__message'>{message}</span>}
        </div>
    );
};
export default Textarea;
