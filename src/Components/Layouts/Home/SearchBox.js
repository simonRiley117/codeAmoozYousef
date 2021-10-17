import React from 'react';
import { Input } from 'antd';
import { ReactComponent as SearchIcon } from '@Assets/Icons/search-icon.svg';

const { Search } = Input;

const SearchBox = () => {
	const onSearch = (value) => console.log(value);
	return (
		<div className='home__header--search'>
			<Search
				placeholder='میخوای چی یاد بگیری؟'
				onSearch={onSearch}
				enterButton={<SearchIcon />}
			/>
		</div>
	);
};
export default SearchBox;
