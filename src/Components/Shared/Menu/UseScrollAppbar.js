import React, { useState, useEffect, useRef, useCallback } from "react";

const UseScrollAppbar = () => {
  // new:
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setSticky(currentScrollPos > 40);
    const isVisible = prevScrollPos >= currentScrollPos;

    setVisible(isVisible);

    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return { visible, sticky };
};
export default UseScrollAppbar;
