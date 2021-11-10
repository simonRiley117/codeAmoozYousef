import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Shared/Inputs/Input";
import Magnifier from "@Assets/Icons/fe_search.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/fe_search.svg";
import { searchItem } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";
const Searchxx = ({ children }) => {
  const [text, setText] = useRecoilState(searchItem);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setText(data.search);
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
      />
      {/* <img
        src={Magnifier}
        alt="magnifier"
        className="search-img cursor-pointer"
        
      /> */}
    </form>
  );
};

export default Searchxx;
