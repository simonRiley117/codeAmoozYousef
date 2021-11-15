import React, { useState } from 'react';
import clock from '@Assets/Icons/clock.svg';
import Coin from '@Assets/Icons/Coin.svg';
import section from '@Assets/Icons/section.svg';
import Rate from '@Components/Shared/Rate/Rate';
import { Radio } from 'antd';
import Button from '@Components/Shared/Buttons/Button';
import share from '@Assets/Icons/share.svg';

function CourseTable() {
	let price = 200000;
	let price1 = 200500;
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<div className='CourseTable'>
			<div className='CourseTable__Position'>
				<div className='CourseTable__Table'>
					<div className='flex items-center justify-start CourseTable__titleBox'>
						<div className='half__circle relative'></div>
						<p className='CourseTable__title'>دوره برنامه نویسی python</p>
					</div>
					<div className='CourseTable__Body'>
						<div className='flex items-center justify-start CourseTable__infoBox'>
							<img alt={clock} src={clock} />
							<p className='CourseTable__infotxt'>06:22:13</p>
						</div>
						<div className='flex items-center justify-start CourseTable__infoBox'>
							<img alt={section} src={section} />
							<p className='CourseTable__infotxt'>32</p>
							<span className='CourseTable__infotxt'>جلسه</span>
						</div>
						<div className='flex items-center justify-start CourseTable__infoBox'>
							<img alt={Coin} src={Coin} />
							<p className='CourseTable__infoPrice'>
								{price.toLocaleString()}
							</p>
							<p className='CourseTable__infotxt CourseTable__infoPrice-main'>
								{price1.toLocaleString()}
							</p>
							<span className='CourseTable__infotxt'>تومان</span>
						</div>
						<div className='CourseTable__RateBox'>
							<Rate defaultValue={2.5}/>
						</div>
						<div className='CourseTable__DegreeBox'>
							<p className='CourseTable__DegreeTitle'>
								دریافت گواهی پایان دوره:
							</p>
							<Radio.Group onChange={onChange} value={value}>
								<Radio value={1}>مدرک دانشگاه صنعتی شریف</Radio>
								<Radio value={2}>مدرک فنی حرفه ای</Radio>
								<Radio value={3}>بدون مدرک</Radio>
							</Radio.Group>
						</div>
						<Button type='primary' classes='CourseTable__btn'>
							افزودن به سبد خرید
						</Button>
						<div className='flex items-center justify-center CourseTable__ShareBox '>
							<img src={share} alt={share} className='cursor-pointer' />
							<p>لینک به اشتراک گذاشتن دوره</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseTable;
