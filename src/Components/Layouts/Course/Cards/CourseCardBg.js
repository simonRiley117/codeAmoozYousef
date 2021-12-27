import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Price from '@Components/Shared/Price/Price';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import { toast } from 'react-toastify';
import { useUserData } from '@App/Context/userContext';
// Assets
import { ReactComponent as ClockIcon } from '@Assets/Icons/clock.svg';
import { ReactComponent as User } from '@Assets/Icons/user.svg';
import { ReactComponent as Star } from '@Assets/Icons/star.svg';
import { ReactComponent as Heart } from '@Assets/Icons/heart.svg';
import { ReactComponent as CardIcon } from '@Assets/Icons/shoppingCard.svg';
import useFetch from '@App/Context/useFetch';
import { useAuth } from '@App/Context/authContext';

const CourseCardBg = ({ card, getLatestCourseList, getallCourseList }) => {
	const {
		uuid,
		num_of_participants,
		teacher_first_name,
		level,
		teacher_last_name,
		intro,
		total_time_of_course,
		nums_of_voter,
		mean_of_participant_points,
		is_favorite,
		title,
		has_user_course,
		get_price_without_degree_with_some_extra_info,
		teacher_avatar,
		teacher_uuid,
		cover,
		is_course_in_cart,
	} = card;
	const { getUser } = useUserData();
	const [addtocardData, setaddtocardData] = useState();
	const cost = get_price_without_degree_with_some_extra_info;
	const [isfav, setisFav] = useState(is_favorite);
	const [isCourseinCart, setisCourseinCart] = useState(is_course_in_cart);
	const { token } = useAuth();

	const Addtocard = useFetch({
		url: `CartService/addToCart`,
		method: 'POST',
		trigger: false,
		data: addtocardData,
		// caller: getLatestCourseList,
		argFunc: (res) => {
			toast.success('دوره با موفقیت به سبد کالا اضافه شد');
			getLatestCourseList.reFetch();
			getallCourseList.reFetch();
			setisCourseinCart(true);
			getUser.reFetch();
		},
		argErrFunc: (err) => handleErrorAddtocard(err),
	});
	const handleErrorAddtocard = (err) => {
		if (err?.data === 'course already exists') {
			toast.error('این دوره از قبل به سبد کالا اضافه شده است');
		}
		if (err?.detail === 'Given token not valid for any token type') {
			toast.error('برای خرید دوره اول وارد سایت شوید');
		}
	};

	const postToFav = useFetch({
		url: `StudentService/willing_course_post`,
		method: 'POST',
		trigger: false,
		data: { course_uuid: uuid },
		argFunc: (res) => {
			toast.success('دوره با موفقیت به لیست علاقه مندی های شما اضافه شد');
			getLatestCourseList.reFetch();
			getallCourseList.reFetch();
			setisFav(true);
		},
		argErrFunc: (err) => handleErrorAddtoFav(err),
	});
	const handleErrorAddtoFav = (err) => {
		if (err?.data === 'You already have this course in your willingList') {
			toast.error('این دوره از قبل به لیست علاقه مندی ها اضافه شده است');
		}
		if (err?.detail === 'Given token not valid for any token type') {
			toast.error('برای افزودن به لیست علاقه مندی ها اول وارد سایت شوید');
		}
	};

	const addToCard = (id) => {
		if (token) {
			setaddtocardData({ course_uuid: id, degree_uuid: null });
			Addtocard.reFetch();
		} else {
			toast.error('ابتدا وارد سایت شوید');
		}
	};
	const addToWishList = () => {
		if (token) {
			postToFav.reFetch();
		} else {
			toast.error('ابتدا وارد سایت شوید');
		}
	};
	const removeromWishList = () => {};
	return (
		<article className='card-bg'>
			{/* <div className="card-bg-discount">
        <span>40%</span>
        <span>تخفیف</span>
      </div> */}
			<div
				className={
					cost.discountRate !== 0 ? 'card-bg-off-show' : 'card-bg-off-hide'
				}
			>
				{cost.discountRate}%تخفیف
			</div>
			<div className='card-bg-pic'>
				<img src={cover} alt='python' className='card-bg-pic-logo' />
			</div>
			<div className='card-bg-info'>
				<div className='card-bg-content '>
					{!has_user_course && (
						<div className='card-bg--box'>
							<div
								className={`card-bg--shopingcard ${
									!isCourseinCart
										? 'wishList--empthy'
										: 'wishList--full'
								}`}
							>
								{!has_user_course && (
									<IconBtn
										getPopupContainer={false}
										onClick={() => addToCard(uuid)}
										title='افزودن به سبدخرید'
										icon={<CardIcon />}
										disabled={Addtocard.loading}
									/>
								)}
							</div>
							<div
								className={`card-bg--heart ${
									!isfav ? 'wishList--empthy' : 'wishList--full'
								}`}
							>
								<IconBtn
									getPopupContainer={false}
									onClick={!isfav ? addToWishList : removeromWishList}
									title='افزودن به لیست علاقه مندیها'
									icon={<Heart />}
									disabled={postToFav.loading}
								/>
							</div>
						</div>
					)}

					<h5 className='card-bg-title'>
						<Link
							to={`/courses/content`}
							state={{
								name: title,
								id: uuid,
							}}
						>
							{title}
						</Link>
					</h5>
					<p className='mt-6 card-bg-des'>{intro}</p>

					<div className='d-flex-space mt-auto'>
						<div className='card-bg-info-row '>
							<div className='d-flex-align card-bg-info-row-star'>
								{Array.from(
									{
										length: mean_of_participant_points.grade
											? mean_of_participant_points.grade
											: 0,
									},
									(_, i) => (
										<Star />
									)
								)}
								<span className='card-bg-time'>
									{mean_of_participant_points.grade
										? mean_of_participant_points.grade
										: '0'}
									<span>({nums_of_voter})</span>
									نفر
								</span>
							</div>
							<div className='d-flex-align card-bg-info-row-time'>
								<ClockIcon />
								<span className='card-bg-time'>
									{total_time_of_course}
								</span>
							</div>
							<div className='d-flex-align card-bg-info-row-user'>
								<User />
								<span className='card-bg-time'>
									{num_of_participants}نفر
								</span>
							</div>
						</div>
						<div className='card-bg-info-row-level  center'>
							<span>{level}</span>
						</div>
					</div>

					<div className='d-flex-space card-bg-footer'>
						<Link
							to='/courses/teacher'
							state={{
								courseId: uuid,
								teacherId: teacher_uuid,
							}}
							className='card-bg-img-pic'
						>
							<img src={teacher_avatar} alt='teacher-avatar' />
							<span>
								{teacher_first_name} {teacher_last_name}
							</span>
						</Link>
						<div className='card-bg-price'>
							{!has_user_course && (
								<>
									{cost?.discountRate || cost?.discountRate !== 0 ? (
										<div>
											{cost?.originalAmount !== 0 ? (
												<Price
													value={cost.originalAmount}
													isDiscount
												/>
											) : (
												<p>رایگان</p>
											)}
										</div>
									) : null}
								</>
							)}
							{!has_user_course ? (
								<>
									{cost?.discountAmount !== 0 ? (
										<Price
											value={cost.discountAmount}
											suffix='تومان'
											success
										/>
									) : (
										<span className='success'> رایگان</span>
									)}
								</>
							) : (
								<p className='success'> این دوره خریده شده است</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CourseCardBg;
//  <Price value={get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
