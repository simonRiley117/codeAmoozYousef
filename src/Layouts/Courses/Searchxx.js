import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Shared/Inputs/Input";
import Magnifier from "@Assets/Icons/fe_search.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/fe_search.svg";
import { searchItem } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";
const Searchxx = ({ children }) => {
  const [text, setText] = useRecoilState(searchItem);
  const history = useHistory();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setText(data.search);
    // window.location.href = `/search/${data.search}`;
    history.push(`/search/${data.search}`);
    // window.location.pathname = `/search/${text}`;
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
