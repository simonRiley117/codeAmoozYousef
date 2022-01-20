import React, {createContext, useContext, useState} from 'react';
import {useAuth} from "./authContext";
import useFetch from "./useFetch";
import {toast} from "react-toastify";
import {useCartData} from '@App/Context/cartContext';

const CourseListIconsContext = createContext();

function CourseListIconsProvider(props) {
    const [cartCourseListIcons, setCartCourseListIcons] = useState([])
    const [favoriteCourseListIcons, setFavoriteCourseListIcons] = useState([])
    const [addtocardData, setaddtocardData] = useState();
    const [addToWishData, setAddToWishData] = useState()
    // const [isCourseinCart, setisCourseinCart] = useState(
    //     is_course_in_cart || has_user_course
    // );
    // const [isfav, setisFav] = useState(is_favorite);
    // const [courseUUID, setCourseUUID] = useState(null)
    const {getCart} = useCartData();
    const {token} = useAuth();

    // const getCourseUUID = (data) => {
    //     setCourseUUID(data)
    // }

    const getAddToCardData = (data) => {
        setaddtocardData(data)
    }

    const getAddToWishData = (data) => {
        setAddToWishData(data)
    }

    const setData = (data) => {
        setFavoriteCourseListIcons(data.favorite_course_list);
        setCartCourseListIcons(data.cart_course_list);
    };

    const getCourseListIcons = useFetch({
        url: `StudentService/courseListIcons`,
        noHeader: token ? false : true,
        setter: setData,
    });

    const Addtocard = useFetch({
        url: `CartService/addToCart`,
        method: 'POST',
        trigger: false,
        data: addtocardData,
        argFunc: (res) => {
            toast.success('دوره با موفقیت به سبد کالا اضافه شد');
            getCart.reFetch();
            getCourseListIcons.reFetch()
            // setisCourseinCart(true);
        },
    });

    const postToFav = useFetch({
        url: `StudentService/willing_course_post`,
        method: "POST",
        trigger: false,
        data: addToWishData,
        argFunc: (res) => {
            toast.success("دوره با موفقیت به لیست علاقه مندی های شما اضافه شد");
            getCourseListIcons.reFetch()
            // setisFav(true);
        },
    });

    const deleteFav = useFetch({
        url: "StudentService/willing_course_delete",
        method: "DELETE",
        trigger: false,
        data: addToWishData,
        argFunc: (res) => {
            toast.success("دوره از لیست علاقه مندی‌ها حذف شد!");
            getCourseListIcons.reFetch()
            // setisFav(false);
        },
    });

    return (
        <CourseListIconsContext.Provider value={{
            Addtocard,
            postToFav,
            deleteFav,
            // getCourseUUID,
            getAddToCardData,
            getAddToWishData,
            cartCourseListIcons,
            favoriteCourseListIcons,
        }} {...props}>
            {props.children}
        </CourseListIconsContext.Provider>
    );
}

export default CourseListIconsContext;

const useCourseListIcons = () => useContext(CourseListIconsContext);

export {useCourseListIcons, CourseListIconsProvider};