import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import InputTextArea from '@Components/Shared/Inputs/Textarea';
import CheckBox from '@Components/Shared/Inputs/CheckBox';
import Button from '@Components/Shared/Buttons/Button';
import useFetch from '../../../../Context/useFetch';
import Select from '../../../Shared/Inputs/Select';
import Upload from '../../../Shared/Inputs/Upload';
import { useUserData } from '@App/Context/userContext';

const optionList = [
	{ label: ' دیپلم', value: 'U.DP' },
	{ label: 'فوق دیپلم ', value: 'DP' },
	{ label: 'کارشناسی ', value: 'B.S' },
	{ label: 'کارشناسی ارشد ', value: 'M.S' },
	{ label: 'دکترا ', value: 'Ph.D' },
];

function Request() {
	const { userData } = useUserData();

	const [technicalCoworkerPostData, setTechnicalCoworkerPostData] =
		useState(null);
	const {
		handleSubmit,
		control,
		register,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			first_name: userData?.first_name,
			last_name: userData?.last_name,
			email: userData?.email,
		},
	});

	const onSubmit = (data) => {
		let formData = new FormData();
		if (data.resume.length !== 0) {
			formData.append('resume', data.resume[0], data.resume[0].name);
		}
		formData.append('first_name', data.first_name);
		formData.append('last_name', data.last_name);
		formData.append('email', data.email);
		formData.append('phone_number', data.phone_number);
		formData.append('degree', data.degree);
		formData.append('major', data.major);
		formData.append('bio', data.bio);
		setTechnicalCoworkerPostData(formData);
		postTechnicalCoWorker.reFetch();
	};

	const postTechnicalCoWorker = useFetch({
		url: 'TechnicalTeamCoWorkerService',
		method: 'POST',
		trigger: false,
		data: technicalCoworkerPostData,
		// caller: getTechnicalCoWorkerInfo,
		message: 'اطلاعات با موفقیت ثبت شد',
	});

	return (
		<div className='Deatil'>
			<div className='ProduceRules__content'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='MasterSignUp__formBox'
				>
					<div className='grid grid-cols-2 MasterSignUp__gridBox items-start justify-start'>
						<Input
							label='نام'
							register={{
								required: {
									value: true,
									message: 'نام را وارد کنید',
								},
							}}
							name='first_name'
							control={control}

							// value={technicalCoworkerData?.first_name}
						/>
						<Input
							label='نام خانوادگی'
							register={{
								required: {
									value: true,
									message: 'نام خانوادگی را وارد کنید',
								},
							}}
							name='last_name'
							control={control}
							// value={technicalCoworkerData?.last_name}
						/>
						<Select
							label='میزان تحصیلات'
							register={{
								required: true,
							}}
							message='میزان تحصیلات را وارد کنید'
							name='degree'
							options={optionList}
							control={control}
							// value={technicalCoworkerData?.degree}
							defaultValue='U.DP'
						/>
						<Input
							label='رشته تحصیلی'
							register={{
								required: {
									value: true,
									message: 'رشته تحصیلی را وارد کنید',
								},
							}}
							name='major'
							control={control}

							// value={technicalCoworkerData?.major}
						/>
						<Input
							label='شماره تماس'
							register={{
								required: {
									value: true,
									message: 'شماره تماس را وارد کنید',
								},
							}}
							name='phone_number'
							control={control}

							// value={technicalCoworkerData?.phone_number}
						/>
						<Input
							label='ایمیل'
							register={{
								required: {
									value: true,
									message: 'ایمیل خود را وارد کنید',
								},
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'ایمیل وارد شده اشتباه است!',
								},
							}}
							name='email'
							control={control}
							// value={technicalCoworkerData?.email}
						/>
					</div>
					<div className='MasterSignUp__textarea'>
						<InputTextArea
							label='شرح مختصری از شما'
							register={{
								required: {
									value: true,
									message: 'شرح را وارد کنید',
								},
							}}
							name='txt'
							control={control}

							// value={technicalCoworkerData?.bio}
						/>
					</div>
					<div className='profile__upload-row'>
						<Upload
							label='رزومه'
							{...register('resume', { required: true })}
							message='رزومه خود را انتخاب کنید'
							error={errors['resume']}
							accept='.pdf'
							id='cover_upload'
						/>
					</div>
					<div className='flex items-start text-right MasterSignUp__ruleBox'>
						<CheckBox
							label='سایت را قبول دارم'
							message='قوانین و مقررات'
							name='rule'
							control={control}
							register={{
								required: true,
							}}
						/>
					</div>
					<div className='text-center flex items-center justify-center MasterSignUp__btnBox '>
						<Button
							type='primary'
							classes='MasterSignUp__btn'
							htmlType='submit'
						>
							ارسال
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Request;
