import React, {createContext, useContext} from 'react';

const CourseListIconsContext = createContext();

function CourseListIconsProvider(props) {


    return (
        <CourseListIconsContext.Provider value={{}} {...props}>
            {props.children}
        </CourseListIconsContext.Provider>
    );
}

export default CourseListIconsContext;

const useCourseListIcons = () => useContext(CourseListIconsContext);

export {useCourseListIcons, CourseListIconsProvider};