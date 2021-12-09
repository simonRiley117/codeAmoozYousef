import React, { useState } from 'react';
import Input from '../../Components/Shared/Inputs/Input';
import Textarea from '../../Components/Shared/Inputs/Textarea';
import { useForm } from 'react-hook-form';
//images
import headset from '../../Assets/Images/Pic/Group 823.png';
import Button from '../../Components/Shared/Buttons/Button';
import useFetch from '../../Context/useFetch';
import Title from '@Components/Shared/Title';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';

const Contact = () => {
	const [contactPostData, setContactPostData] = useState(null);

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const postContact = useFetch({
		url: `ContactService/create_contact`,
		method: 'POST',
		trigger: false,
		data: contactPostData,
		message: 'اطلاعات با موفقیت ارسال شد',
	});

	const onSubmit = (data) => {
		let formData = new FormData();
		formData.append('name', data.name);
		formData.append('email', data.email);
		formData.append('message', data.message);
		setContactPostData(formData);
		postContact.reFetch();
	};

	return (
		<div className='contact container'>
			<BreadCrump />
			<div className='contact-wrapper mx-auto  rounded-full'>
				<Title>ارتباط با ما</Title>
				<form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
					<Input
						label='نام و نام خانوادگی'
						register={{
							required: {
								value: true,
								message: 'نام نام خانوادگی را وارد کنید',
							},
						}}
						name='name'
						control={control}
						absolute
					/>
					<Input
						label='ایمیل'
						register={{
							required: {
								value: true,
								message: 'ایمیل را وارد کنید',
							},
						}}
						name='email'
						control={control}
						type='email'
						absolute
					/>
					<Textarea
						label='پیام شما'
						register={{
							required: {
								value: true,
								message: 'پیام را وارد کنید',
							},
						}}
						name='message'
						control={control}
						minRows={6}
					/>
					<Button
						classes='contact-button w-full'
						type='primary'
						htmlType='submit'
					>
						ارسال
					</Button>
				</form>
				<article className='contact-img'>
					<img src={headset} alt='headset' className='image' />
				</article>
			</div>
		</div>
	);
};
export default Contact;
