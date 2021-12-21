import React, { useEffect, useState } from 'react';
import { Accordion, Panel } from '@Components/Shared/Accordion/Accordion';
import Clock, { ReactComponent as LockIcon } from '@Assets/Icons/clock.svg';
import Lock from '@Assets/Icons/lock.svg';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import classNames from 'classnames';
import ContentItem from './ContentItem';
import { useLocation } from 'react-router';
import useFetch from '../../../Context/useFetch';
import { CollapsePanelProps } from 'antd';
import { ReactComponent as Arrow } from '@Assets/Icons/arrow-down.svg';

const SeasonsItem = ({
	openPanels,
	season,
	index,
	activeSeasons,
	constFunction,
	getContentName,
	activeContent,
	setquizUuid,
	changeContentID,
	setIsContentPass,
	...rest
}) => {
	const [contentList, setcontentList] = useState([]);
	console.log('contentList', contentList);
	const getCourseSeasons = useFetch({
		url: `SeasonService/${season.uuid}/sidebar`,
		method: 'GET',
		trigger: false,
		setter: setcontentList,
	});
	useEffect(() => {
		console.log('openPanel', openPanels);
		if (openPanels.includes(season.uuid) || activeSeasons === season.uuid) {
			getCourseSeasons.reFetch();
		}
	}, [activeSeasons, openPanels]);
	const FetchContent = () => {
		if (contentList.length === 0 && !season.lockedOn) {
			getCourseSeasons.reFetch();
		}
	};
	return (
		<Panel
			{...rest}
			collapsible={season.lockedOn ? 'disabled' : undefined}
			header={
				<SeasonTitle
					title={season.title}
					done={season.is_season_passed}
					index={index}
				/>
			}
			extra={
				<SeasonHeader
					time={season.total_time_for_each_season}
					lock={!season.lockedOn}
					id={season.uuid}
					FetchContent={FetchContent}
					openPanels={openPanels}
				/>
			}
			key={season.uuid}
		>
			{contentList.length !== 0 &&
        contentList.map((content, index) => (
          <ContentItem
            changeContentID={changeContentID}
            setquizUuid={setquizUuid}
            activeContent={activeContent}
            key={content.id}
            index={index}
            content={content}
            getContentName={getContentName}
            setIsContentPass={setIsContentPass}
          />
        ))}
		</Panel>
	);
};

const SeasonTitle = ({ title, done, index }) => {
	return (
		<span className='flex items-center gap-x-4'>
			{done ? (
				<span className='Sarfasl__Accordiondone'>
					<i className='fas fa-check'></i>
				</span>
			) : (
				<span className='Sarfasl__Accordionnumber'>{index + 1}</span>
			)}
			<span>{title}</span>
		</span>
	);
};
const SeasonHeader = ({ time, lock, FetchContent }) => {
	return (
		<div className='Sarfasl__AccordionItem'>
			{lock && <img src={Lock} alt={Lock} />}
			<div className='Sarfasl__AccordionItem--time'>
				<time>{time}</time>
				<img src={Clock} alt={Clock} />
			</div>
		</div>
	);
};
export default SeasonsItem;
