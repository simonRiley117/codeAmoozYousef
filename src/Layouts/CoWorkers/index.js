import React from 'react';
import BreadCrump from '@Components/Shared/BreadCrump/BreadCrump';
import Title from '@Components/Shared/Title';
import master from '@Assets/Pic/master.png';
import coworkerTeam from '@Assets/Pic/coworkerTeam.png';
import cowrkercreater from '@Assets/Pic/cowrkercreater.png';
import Link from '@Components/Shared/Buttons/Link';

function index() {
	return (
		<div className='CoWorkers container'>
			<BreadCrump />
			<div className='CoWorkers__titleBox'>
				<Title>همکاری با ما</Title>
			</div>
			<div className='CoWorkers__contentBox w-4/5 grid grid-cols-3 justify-center items-center'>
				{info.map((index, id) => (
					<div
						className={`CoWorkers__box flex flex-col justify-between items-center CoWorkers__box-${id}`}
						key={id}
					>
						<p className='CoWorkers__titr font-bold'>{index.title}</p>
						<div className='CoWorkers__iconBox'>
							<img
								src={index.icon}
								alt={index.icon}
								className='CoWorkers__icons'
							/>
						</div>
						<p className='CoWorkers__txt'>{index.txt}</p>

						<div className='text-center'>
							<Link to={index.rout} type='primary'>
								همکاری با ما
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default index;
const info = [
	{
		title: 'تیم کارفرما',
		icon: cowrkercreater,
		txt: 'اگه شما شرکت یا استارت آپی دارید که دوست  دارید با ما همکاری کنید خوشحال میشیم که  باهاتون آشنا بشیم.',
		rout: 'employer',
	},

	{
		title: 'تیم فنی',
		icon: coworkerTeam,
		txt: 'اگه در زمینه های برنامه نویسی و یا شاخه های گرافیک فعالیت دارید می تونید با ما همکاری کنید.',
		rout: 'technicalteam',
	},
	{
		title: 'اساتید',
		icon: master,
		txt: 'اگه جزو اساتید باتجربه هستید و دوست دارید دوره هاتونو در اختیار دانشجو های علاقه مند قرار بدید وقتشه همکاری با ما رو شروع کنید.',
		rout: 'master',
	},
];
