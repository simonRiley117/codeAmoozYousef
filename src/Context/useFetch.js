import { useState, useEffect } from "react";
import useAxios from "@use-hooks/axios";
import { API_URL } from "../constants";
import { useAuth } from "./authContext";
import { toast } from "react-toastify";

export default function useFetch({
  method = "GET",
  url,
  setter = null,
  data = null,
  params = null,
  trigger = true,
  caller = null,
  func = null,
  message = null,
  argFunc = null,
  pagination = null,
  noHeader = false,
  setLoader = null,
  errMessage = null,
  argErrFunc = null,
}) {
  const { token } = useAuth();
  const { response, loading, error, reFetch } = useAxios({
    url:
      pagination == null
        ? `${API_URL}/${url}/`
        : `${API_URL}/${url}/?page=${pagination.current}&pageSize=${pagination.pageSize}`,
    method: method,
    options: {
      // withCredentials: true,
      headers: noHeader
        ? {}
        : {
            // 'content-type': 'multipart/form-data',
            Authorization: `JWT ${token}`,
          },
      data: data,
      params: params,
    },

    customHandler: (err, res) => {
      if (res) {
        // console.log("data", res.data);
        if (setter !== null) setter(res.data);
        if (caller !== null) caller.reFetch();
        if (func !== null) func();
        if (argFunc !== null) argFunc(res.data);
        if (message !== null) {
          toast.success(message);
        }
        // if (message !== null)
        //   toast.success(message, {
        //     position: toast.POSITION.TOP_CENTER,
        //   });
      }
      if (err) {
        console.log(err);

        console.log(err.response);
        if (setLoader !== null) {
          setLoader(false);
        }
        if (errMessage === null) {
          toast.error(err.response?.statusText);
        } else {
          toast.error(errMessage);
        }
        if (argErrFunc !== null) argErrFunc(err.response?.data);

        // toast.error('دوباره تلاش کنید');
        // toast.error("دوباره تلاش کنید", {
        //   position: toast.POSITION.TOP_CENTER,
        // });
        // authDispatch({ type: "LOGOUT" });
      }
    },
  });

  useEffect(() => {
    if (trigger) reFetch();
  }, []);

  return { response, error, loading, reFetch };
}
