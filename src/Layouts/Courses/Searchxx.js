import React from "react";
import {useForm} from "react-hook-form";
import Input from "../../Components/Shared/Inputs/Input";
import magnifier from '../../Assets/Images/Icons/fe_search.png'

const Searchxx = ({children}) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    return (
        <div className="search-container">
            <Input
                message="جستجو دوره"
                name="search"
                control={control}
                errors={errors}
                classes="search"
                placeholder="میخوای چی یاد بگیری"
            />
            <img src={magnifier} alt="magnifier" className="search-img"/>
        </div>

  );
};

export default Searchxx;