import TeacherInfo from '@Components/Layouts/Course/Teacher/TeacherInfo';
import Resume from '@Layouts/resume/Resume';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Teacherresume = () => {
	const location = useLocation();

	return (
		<div className='container  mt-60'>
			<div className='TeacherInfo-wrapper'>
				<TeacherInfo courseId={location.state.courseId} resume={true} />
				<h3 className='title'> رزومه</h3>
				<section className='TeacherInfo__resume'>
					<Resume teacherId={location.state.teacherId} readable />
				</section>
			</div>
		</div>
	);
};

export default Teacherresume;
