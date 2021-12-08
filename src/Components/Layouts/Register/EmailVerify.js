import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../../../Context/useFetch";

function EmailVerify(props) {
  const navigate = useNavigate();

  const { confirmedkey } = useParams();

  const confirmRequest = useFetch({
    url: `auth/account-confirm-email/${confirmedkey}`,
    method: "POST",
    data: { key: confirmedkey },
    noHeader: true,
    message: "ایمیل با موفقیت تایید شد",
    argFunc: (res) => {
      navigate("/");
    },
    errMessage: (mess) => {
      if (mess.detail == "Not found.") {
        //! toast error message
        navigate("/");
      }
    },
  });

  return (
    // <div className="EmailVerify" onClick={() => history.push("/")}>
    //   <h1>{respon}</h1>
    // </div>
    <>asd</>
  );
}

export default EmailVerify;
