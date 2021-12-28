import React,{useEffect} from "react";
import RulesContainer from "@Components/Layouts/Rules/RulesContainer";

const Rules = () => {
  useEffect(() => {
		window.scrollTo(0, 0);
	
	  }, [])
  return (
    <div className="container">
      <RulesContainer />
    </div>
  );
};

export default Rules;
