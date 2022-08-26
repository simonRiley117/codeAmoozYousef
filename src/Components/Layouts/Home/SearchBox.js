import React from 'react';
import { Input } from 'antd';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useController, useForm } from 'react-hook-form';
import { ReactComponent as SearchIcon } from '@Assets/Icons/search.svg';

const { Search } = Input;

const SearchBox = () => {
	const { control, handleSubmit } = useForm();
	const navigate = useNavigate();
	const onSubmit = ({ search }) => {
		navigate({
			pathname: '/search',
			search: `?${createSearchParams({ s: search })}`,
			// search: value,
		});
	};

	const { field } = useController({
		name: 'search',
		rules: {
			required: true,
		},
		control,
	});
	return (
		<div className='home__header--search'>
			<Search
				placeholder='میخوای چی یاد بگیری؟'
				onSearch={handleSubmit(onSubmit)}
				enterButton={<SearchIcon />}
				{...field}
			/>
		</div>
	);
};
export default SearchBox;
