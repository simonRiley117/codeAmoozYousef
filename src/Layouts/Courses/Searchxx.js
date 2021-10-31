import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Shared/Inputs/Input";
import magnifier from "../../Assets/Images/Icons/fe_search.png";
import { searchItem } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";
const Searchxx = ({ children }) => {
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
  const [text, setText] = useRecoilState(searchItem);
console.log(`text`, text)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-container">
      <Input
        message="جستجو دوره"
        name="search"
        control={control}
        errors={errors}
        classes="search"
        placeholder="میخوای چی یاد بگیری"
      />
      <img
        src={magnifier}
        alt="magnifier"
        className="search-img cursor-pointer"
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default Searchxx;
