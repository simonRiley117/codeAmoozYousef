import React from "react";
import { Input } from "antd";
import { ReactComponent as SearchIcon } from "@Assets/Icons/search-icon.svg";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useController, useForm } from "react-hook-form";

const { Search } = Input;

const SearchBox = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = ({ search }) => {
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ s: search })}`,
      // search: value,
    });
  };

  const { field } = useController({
    name: "search",
    control,
  });
  return (
    <div className="home__header--search">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Search
          placeholder="میخوای چی یاد بگیری؟"
          enterButton={<SearchIcon onClick={handleSubmit(onSubmit)} />}
          {...field}
        />
      </form>
    </div>
  );
};
export default SearchBox;
