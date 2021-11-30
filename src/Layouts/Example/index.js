import React, {useState, useEffect} from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import {useParams, useLocation} from "react-router-dom";
import ExampleDetail from "@Components/Layouts/Example/ExampleDetail";
import useFetch from "../../Context/useFetch";

function Index(props) {
    console.log('PROPS: ', props.location.state)
    // const {title} = useParams();
    // const location = useLocation();
    // const [titles, setTitles] = useState("");
    // const [menu, setMenu] = useState([]);
    const {title, id} = props.location.state
    const [example, setExample] = useState(null);
    const [exampleLoading, setExampleLoading] = useState(true);

    const setData = (data) => {
        setExample(data);
        setExampleLoading(false);
    }

    const getExample = useFetch({
        url: `ExampleService/${id}/example_get`,
        method: "GET",
        noHeader: false,
        setter: setData
    });


    // console.log('PROPSzzz: ', titles)
    // useEffect(() => {
    //     setTitles(location.state.title);
    // }, [location]);

    return (
        <>
            {!exampleLoading ? (
                <div className="Example container">
                    <BreadCrump pathsname="/dash/example" name={title}/>
                    <div className="Example__container">
                        <ExampleDetail example={example}/>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Index;
