import React, { useState, useEffect, useRef, useCallback } from 'react';

const UseScrollAppbar = () => {
	const [sticky, setSticky] = useState(false);

	const handleScroll = useCallback(() => {
		setSticky(window.scrollY > 40);
	}, []);

	// new useEffect:
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return { sticky };
};
export default UseScrollAppbar;
