import React, { useState } from 'react';
import mastersignup from '@Assets/Pic/mastersignup.png';
import { useForm } from 'react-hook-form';
import Input from '@Components/Shared/Inputs/Input';
import InputTextArea from '@Components/Shared/Inputs/Textarea';
import CheckBox from '@Components/Shared/Inputs/CheckBox';
import Button from '@Components/Shared/Buttons/Button';
import { useUserData } from '@App/Context/userContext';
import useFetch from '../../../../Context/useFetch';
import Select from '@Components/Shared/Inputs/Select';
import Upload from '../../../Shared/Inputs/Upload';
import { isEmpty } from 'lodash';

const optionList = [
	{ label: ' دیپلم', value: 'U.DP' },
	{ label: 'فوق دیپلم ', value: 'DP' },
	{ label: 'کارشناسی ', value: 'B.S' },
	{ label: 'کارشناسی ارشد ', value: 'M.S' },
	{ label: 'دکترا ', value: 'Ph.D' },
];

function MasterSignUp() {
	// const [teacherCoworkerData, setTeacherCoworkerData] = useState(null);
	const [teacherCoworkerPostData, setTeacherCoworkerPostData] = useState(null);
	// const [teacherCoworkerLoading, setTeacherCoworkerLoading] = useState(true);
	const {
		handleSubmit,
		control,
		register,
	} = useForm();

	const onSubmit = (data) => {
		let formData = new FormData();
		console.log('data: ', data);
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
		setTeacherCoworkerPostData(formData);
		postTeacherCoWorker.reFetch();
	};

	// const setData = (data = {}) => {
	//     console.log('data: ', data)
	//     console.log('data.response: ', data.response)
	//     setTeacherCoworkerData(data);
	//     setTeacherCoworkerLoading(false);
	// };

	// const getTeacherCoWorkerInfo = useFetch({
	//     url: `TeacherCoWorkerService/${teacherCoworkerData?.response?.data?.id}`,
	//     method: 'GET',
	//     setter: setData,
	// });

	const postTeacherCoWorker = useFetch({
		url: 'TeacherCoWorkerService',
		method: 'POST',
		trigger: false,
		data: teacherCoworkerPostData,
		// caller: getTeacherCoWorkerInfo,
		message: 'اطلاعات با موفقیت ثبت شد',
	});

	return (
		<>
			<div className='WorkWithUs'>
				<div className='WorkWithUs__logoBox '>
					<img src={mastersignup} alt={mastersignup} />
				</div>
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
								// value={teacherCoworkerData?.first_name}
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

								// value={teacherCoworkerData?.last_name}
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
								// value={teacherCoworkerData?.degree}
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

								// value={teacherCoworkerData?.major}
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

								// value={teacherCoworkerData?.phone_number}
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
								// value={teacherCoworkerData?.email}
							/>
							<div className='profile__upload-row'>
								<Upload
									label='رزومه'
									{...register('resume', {
										required: true,
									})}
									accept='.pdf'
									// value={teacherCoworkerData?.resume}
									id='cover_upload'
								/>
							</div>
							{/*<UploadProfile/>*/}
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
								name='bio'
								control={control}

								// value={teacherCoworkerData?.bio}
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
		</>
	);
}

export default MasterSignUp;
