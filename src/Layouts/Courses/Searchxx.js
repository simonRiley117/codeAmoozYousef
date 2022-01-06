import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Input from "../../Components/Shared/Inputs/Input";
import {ReactComponent as UserIcon} from "@Assets/Icons/fe_search.svg";
import {searchItem} from "@App/Recoil/StateRecoil";
import {useRecoilState} from "recoil";
import {createSearchParams, useNavigate} from "react-router-dom";
import searchic from "@Assets/Pic/search.png";
import Vector from "@Assets/Pic/Vector.png";
import search from "@Assets/Pic/fe_search.png";

const Searchxx = ({children}) => {
    const [text, setText] = useRecoilState(searchItem);
    const [result, setResult] = useState(false);
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm();
    const onSubmit = ({search}) => {

        // window.location.href = `/search/${data.search}`;
        // console.log('searchXXX: ', search)
        navigate({
            pathname: "/search",
            search: `?${createSearchParams({s: search})}`,
            // search: value,
        });
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-container">
            <Input
                message="جستجو دوره"
                name="search"
                control={control}
                errors={errors}
                classes="search"
                placeholder="میخوای چی یاد بگیری"
                suffix={
                    <UserIcon
                        onClick={handleSubmit(onSubmit)}
                        className="cursor-pointer"
                    />
                }
                // onChange={(e) => {setResult(true);}}
                // onblur={() => setResult(false)}
            />
            {/* <img
        src={Magnifier}
        alt="magnifier"
        className="search-img cursor-pointer"
        
      /> */}
            {/*{result && (*/}
            {/*    <div className="Search__boxDisplay">*/}
            {/*        <div className="grid grid-cols-2 gap-8 ">*/}
            {/*            <div className="Search__contentBox flex items-center justify-start">*/}
            {/*                <img src={searchic} alt="magnifier" className=" cursor-pointer"/>*/}
            {/*                <p>aaa</p>*/}
            {/*            </div>*/}
            {/*            <div className="Search__contentBox flex items-center justify-start">*/}
            {/*                <img src={searchic} alt="magnifier" className=" cursor-pointer"/>*/}
            {/*                <p>aaa</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center justify-between mt-5 Search__footer">*/}
            {/*            <div className="flex items-center Search__lastsearches">*/}
            {/*                <img src={Vector} alt={Vector}/>*/}
            {/*                <p>aaa</p>*/}
            {/*            </div>*/}
            {/*            <img src={search} alt={search}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </form>
    );
};

export default Searchxx;
