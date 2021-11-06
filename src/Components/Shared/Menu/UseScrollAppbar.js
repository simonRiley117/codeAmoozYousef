import React, { useState, useEffect, useRef, useCallback } from 'react';

const UseScrollAppbar = () => {
	const [sticky, setSticky] = useState(false);
  console.log("UseScrollAppbar ~ sticky", sticky)

	const handleScroll = useCallback(() => {
		setSticky(document.body.page)
	}, []);

	

	// new useEffect:
	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
	}, [handleScroll]);

	return { sticky };
};
export default UseScrollAppbar;
