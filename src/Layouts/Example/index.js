import React, { useState, useEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import ExampleDetail from "@Components/Layouts/Example/ExampleDetail";
import useFetch from "../../Context/useFetch";

function Index() {
  const location = useLocation();
  console.log("LOCATION: ", location);
  useEffect(() => {
    setId(location.state.id);
    setCourseUuid(location.state.courseUuid);
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
        <div className="Example ">
          <BreadCrump pathsname="/dash/example" name={title} />
          <div className="Example__container">
            <ExampleDetail example={example} courseUuid={courseUuid} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Index;
