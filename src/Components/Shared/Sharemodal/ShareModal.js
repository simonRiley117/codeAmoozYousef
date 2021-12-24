import React, { useState, useEffect } from "react";
import Modal from "@Components/Shared/Modal/Modal";
import { simplesharer } from "simple-sharer";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes,
  useNavigate,
} from "react-router-dom";
const style = {
  borderRadius: 3,
  border: 0,
  padding: "0 30px",
  width: "90%",
  maxWidth: "90%",
  margin: "0 auto",
};

function ShareModal({ visible, onCancel, ids, url1 }) {
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  let navigate = useNavigate();
  useEffect(() => {
    // console.log(`window.location`, (window.location.href = `/courses/content`));
    // console.log(
    //   `window.location`,
    //   ((window.location = '/courses/content'),
    //   { state: { name: url1, id: ids } })
    // );
  }, []);
  let element = useRoutes([
    {
      path: `/courses/content`,
      state: {
        name: url1,
        id: ids,
      },
    },
  ]);
  console.log(
    `element`,
    useRoutes([
      {
        path: `/courses/content`,
        state: {
          name: url1,
          id: ids,
        },
      },
    ])
  );
  const sh = new simplesharer();
  sh.url = "www.buildbrothers.com"; //your url
  sh.title = "Build Brothers Website"; //title for Reddit, this is optional
  sh.text = "Passionate Mobile and Web Apps Development Team"; // description for twitter, not more than a hundred characters, optional.
  sh.hashtags = ["buildbrothers", "bb", "software dev team"]; // a list of hashtags for twitter,also optional
  const handleLinkCopy = () => {
    // const test = navigate("/courses/content", {
    //   state: { name: url1, id: url },
    //   replace: true,
    // });
    const nextURL = "/courses/content";
    const nextTitle = "My new page title";
    const nextState = {
      name: url1,
      id: ids,
    };
    window.history.pushState(nextState, nextTitle, nextURL);
    navigator.clipboard
      .writeText(
        (window.location.href = `http://localhost:3000/courses/content`)
      )
      .then(
        function () {
          alert("copied successfully!");
        },
        function (err) {
          alert("Failed to copy");
        }
      );
    // navigate({
    //   pathname: "/courses/content",
    //   state: { name: url1, id: url },
    // });
    // navigate("/courses/content", { state: { name: url1, id: url } });
  };

  return (
    <Modal visible={visible} onCancel={onCancel}>
      <div className="ShareModal">
        <button onClick={() => sh.share("facebook")}>
          <i className="fab fa-facebook-f"></i>
        </button>
        <button onClick={() => sh.share("twitter")}>
          <i className="fab fa-twitter"></i>
        </button>
        <button onClick={() => sh.share("whatsapp")}>
          <i className="fab fa-whatsapp"></i>
        </button>
        <button onClick={() => sh.share("reddit")}>
          <i className="fab fa-reddit-alien"></i>
        </button>
        <button onClick={handleLinkCopy}>
          <i className="fas fa-link"></i>
        </button>
        <Link
          to={`/courses/content`}
          state={{
            name: url1,
            id: ids,
          }}
        >
          <i className="fas fa-link"></i>
        </Link>
      </div>
    </Modal>
  );
}

export default ShareModal;
