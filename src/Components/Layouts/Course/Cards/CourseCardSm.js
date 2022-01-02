import React, { useState } from 'react';
import { ReactComponent as Heart } from '@Assets/Icons/heart.svg';
import { ReactComponent as CardIcon } from '@Assets/Icons/shoppingCard.svg';
import { ReactComponent as User } from '@Assets/Icons/user.svg';
import { ReactComponent as ClockIcon } from '@Assets/Icons/clock.svg';
import { ReactComponent as Star } from '@Assets/Icons/star.svg';
import useFetch from '@App/Context/useFetch';
import Price from '@Components/Shared/Price/Price';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import { useUserData } from '@App/Context/userContext';
import { useAuth } from '@App/Context/authContext';

const Coursecardsm = ({ card, liftRequest, getallCourseList }) => {
	const {
		uuid,
		num_of_participants,
		teacher_first_name,
		level,
		teacher_last_name,
		total_time_of_course,
		nums_of_voter,
		mean_of_participant_points,
		is_favorite,
		title,
		has_user_course,
		get_price_without_degree_with_some_extra_info: cost,
		teacher_avatar,
		teacher_uuid,
		cover,
		is_course_in_cart,
	} = card;
	const { getUser } = useUserData();
	// const [courseid, setCourseid] = useState(null);
	const [addtocardData, setaddtocardData] = useState();
	const [isfav, setisFav] = useState(is_favorite);
	const [isCourseinCart, setisCourseinCart] = useState(is_course_in_cart);
	const { token } = useAuth();

	const Addtocard = useFetch({
		//addtocard=>data:course_uuid: "", degree_uuid: null
		url: `CartService/addToCart`,
		method: 'POST',
		trigger: false,
		data: addtocardData,
		// caller: getLatestCourseList,
		argFunc: (res) => {
			toast.success('دوره با موفقیت به سبد کالا اضافه شد');
			liftRequest.reFetch();
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

	const addToCard = (id) => {
		if (token) {
			setaddtocardData({ course_uuid: id, degree_uuid: null });
			Addtocard.reFetch();
		} else {
			toast.error('ابتدا وارد سایت شوید');
		}
	};

	const postToFav = useFetch({
		url: `StudentService/willing_course_post`,
		method: 'POST',
		trigger: false,
		data: { course_uuid: uuid },
		argFunc: (res) => {
			toast.success('دوره با موفقیت به لیست علاقه مندی های شما اضافه شد');
			liftRequest.reFetch();
			getallCourseList.reFetch();
			setisFav(!isfav);
		},
		argErrFunc: (err) => handleErrorAddtoFav(err),
	});
	const DeleteFav = useFetch({
		url: `StudentService/willing_course_delete`,
		method: 'DELETE',
		trigger: false,
		data: { course_uuid: uuid },
		argFunc: (res) => {
			toast.success('دوره با موفقیت به لیست علاقه مندی ها حذف شد   ');
			liftRequest.reFetch();
			getallCourseList.reFetch();
			setisFav(!isfav);
		},
	});
	const handleErrorAddtoFav = (err) => {
		if (err?.data === 'You already have this course in your willingList') {
			toast.error('این دوره از قبل به لیست علاقه مندی ها اضافه شده است');
		}
		if (err?.detail === 'Given token not valid for any token type') {
			toast.error('برای افزودن به لیست علاقه مندی ها اول وارد سایت شوید');
		}
	};

	const addToWishList = () => {
		if (token) {
			postToFav.reFetch();
		} else {
			toast.error('ابتدا وارد سایت شوید');
		}
	};
	const removeromWishList = () => {
		DeleteFav.reFetch();
	};
	return (
		<div className='card-sm'>
			<p
				className={
					cost?.discountRate === 0
						? 'card-sm-off-hide'
						: 'card-sm-off-show'
				}
			>
				<span>{cost?.discountRate}</span>%تخفیف
			</p>
			{!has_user_course && (
				<div className='card-sm-img-hover'>
					<div className='card-sm-img-hover--box'>
						<div
							className={`card-sm-img-hover--shopingcard ${
								!isCourseinCart ? 'wishList--empthy' : 'wishList--full'
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
							className={`card-sm-img-hover--heart ${
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
				</div>
			)}
			<div>
				<div className='card-sm-img'>
					<div className='card-sm-img-title'>
						<img src={cover} alt={title} />
					</div>
				</div>
				<div className='card-sm-content'>
					<div className='card-sm-info-row '>
						<div className='d-flex-align card-sm-info-row-star'>
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
							<p className='card-sm-content-time'>
								{mean_of_participant_points.grade
									? mean_of_participant_points.grade
									: '0'}
								<span>({nums_of_voter})</span>
								نفر
							</p>
						</div>
						<div className='d-flex-align card-sm-info-row-time'>
							<ClockIcon />
							<p className='card-sm-content-time'>
								{total_time_of_course}
							</p>
						</div>
						<div className='d-flex-align card-sm-info-row-user'>
							<User />
							<p className='card-sm-content-time'>
								{num_of_participants}نفر
							</p>
						</div>
					</div>

					<h5 className='cursor-pointer'>
						<Link
							to='/courses/intro'
							state={{
								name: title,
								id: uuid,
								// name: 'X',
								// id: 'Y'
							}}
						>
							{title}
						</Link>
					</h5>
					<Link
						className='card-sm-img-pic'
						to='/courses/teacher'
						state={{
							courseId: uuid,
							teacherId: teacher_uuid,
						}}
					>
						<img src={teacher_avatar} alt='teacher-avatar' />
						<span>
							{teacher_first_name} {teacher_last_name}
						</span>
					</Link>

					<div className='card-sm-footer'>
						<div className='card-sm-footer-level'>{level}</div>
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
										<p className='success'> رایگان</p>
									)}
								</>
							) : (
								<p className='success'> این دوره خریده شده است</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coursecardsm;
