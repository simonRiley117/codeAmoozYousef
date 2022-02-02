import React, { useState, useEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import ExampleDetail from "@Components/Layouts/Example/ExampleDetail";
import useFetch from "../../Context/useFetch";
import { Skeleton } from "antd";

function Index() {
  const location = useLocation();
  const [intro, setIntro] = useState(false);
  console.log("LOCATION: ", location);
  useEffect(() => {
    setId(location.state.id);
    setCourseUuid(location.state.courseUuid);
    setIntro(location.state.intro);
    // setTitle(location.state.title);
  }, [location]);

  const [id, setId] = useState(null);
  const [courseUuid, setCourseUuid] = useState(null);
  const [title, setTitle] = useState("");
  const [example, setExample] = useState(null);
  const [exampleLoading, setExampleLoading] = useState(true);

  const setData = (data) => {
    setExample(data);
    setExampleLoading(false);
  };

  const getExample = useFetch({
    url: `ExampleService/${id}/example_get`,
    method: "GET",
    noHeader: false,
    setter: setData,
  });

  useEffect(() => {
    setTitle(location.state.title);
  }, [location]);
  return (
    <>
      {!exampleLoading ? (
        <div className="Example">
          {/* <BreadCrump
            name={example?.name}
            // name1={example?.content?.content_name}
            id={example?.content?.content_id}
          /> */}
          <BreadCrump
            name={example?.name}
            intro={intro}
            namestate={example?.course_name}
            id={intro ? example?.course_uuid : example?.course_uuid}
          />
          <div className="Example__container">
            <ExampleDetail example={example} courseUuid={courseUuid} />
          </div>
        </div>
      ) : (
        <div className="w-11/12	 m-auto mt-44">
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
        </div>
      )}
    </>
  );
}

export default Index;
