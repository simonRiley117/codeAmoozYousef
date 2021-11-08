import React, { useMemo, useState, useEffect } from 'react';
import { A11y, Autoplay } from 'swiper';
import CourseCardBg from '@Components/Layouts/Course/Cards/CourseCardBg';
import Searchxx from './Searchxx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// images
import Coursecardsm from '@Components/Layouts/Course/Cards/CourseCardSm';
import Filtersxx from './Filtersxx';
import Pagination from '@Components/Shared/Pagination';
import { cardData } from '../../Components/Layouts/News/cardData';
import { searchItem } from '@App/Recoil/StateRecoil';
import { useRecoilState } from 'recoil';
import searchic from '@Assets/Pic/search.png';
const Courses = () => {
	// just some testing array to be able to map on cards
	const cards = [
		{ id: 1, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 2, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 3, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 5, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 6, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 7, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 8, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 9, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 10, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 11, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 12, name: 'دوره آنلاین برنامه نویسی HTML' },
		{ id: 13, name: 'دوره آنلاین برنامه نویسی HTML' },
	];
	// pagination config
	const PageSize = 11;
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState();
	const [text, setText] = useRecoilState(searchItem);
	useEffect(() => {
		setSearch();
		cards.map((index, id) => text === index.name && setSearch(text));
		console.log(`object`, search);
	}, [, text]);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return cards.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
	return (
		<div className='courses px-40 mt-60'>
			{text === '' ? (
				<Swiper
					module={[A11y, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
				>
					{cards.map((card, index) => {
						return (
							<SwiperSlide key={card.id}>
								<CourseCardBg />
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : null}

			<Searchxx />
			<CourseCardBg />

			{text === '' && (
				<>
					{' '}
					<h3 className='text-4xl font-bold mb-12'>
						پرطرفدار ترین دوره ها
					</h3>
					<Swiper
						module={[A11y, Autoplay]}
						spaceBetween={50}
						slidesPerView={4}
					>
						{cards.map((card, index) => {
							return (
								<SwiperSlide style={{ marginBottom: '5.399rem' }}>
									<Coursecardsm key={card.id} />
								</SwiperSlide>
							);
						})}
					</Swiper>
					<Filtersxx />
				</>
			)}
			{text !== '' ? (
				<div>
					<p className='Courses__searchTitle font-bold	'>
						{' '}
						نتیجه جستجو شما برای "{text}":
					</p>
					<div className='grid grid-cols-4 gap-x-6 gap-y-8'>
						{currentTableData.map((card) => {
							return text === card.name ? (
								<Coursecardsm key={card.id} />
							) : null;
						})}
					</div>
				</div>
			) : (
				<div className='grid grid-cols-4 gap-x-6 gap-y-8'>
					{currentTableData.map((card) => {
						return <Coursecardsm key={card.id} />;
					})}
				</div>
			)}
			{/*  */}
			{search === undefined && text !== '' ? (
				<div>
					<div className='Courses__imgBox flex justify-center items-center'>
						<img src={searchic} alt={searchic} className='Courses__img' />
					</div>
				</div>
			) : (
				<div className='Title-paging'>
					<Pagination
						className='pagination-bar'
						currentPage={currentPage}
						totalCount={cards.length}
						pageSize={PageSize}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				</div>
			)}
		</div>
	);
};
export default Courses;
