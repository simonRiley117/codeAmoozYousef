import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import useFetch from "../../../Context/useFetch";

function EmailVerify(props) {
  const history = useHistory();

  const { confirmedkey } = useParams();

  const confirmRequest = useFetch({
    url: `auth/account-confirm-email/${confirmedkey}`,
    method: "POST",
    data: { key: confirmedkey },
    noHeader: true,
    message: "ایمیل با موفقیت تایید شد",
    argFunc: (res) => {
      history.push("/");
    },
    errMessage: (mess) => {
      if (mess.detail == "Not found.") {
        //! toast error message
        history.push("/");
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
