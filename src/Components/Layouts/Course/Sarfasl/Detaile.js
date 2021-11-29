import React, {useState} from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "../../../../Context/useFetch";

function Detaile({contentUuid}) {
    const [content, setContent] = useState([]);

    const getContent = useFetch({
        url: `ContentService/${contentUuid}/getModalContent`,
        method: "GET",
        noHeader: false,
        setter: setContent,
    });
    return (
        <>
            {getContent?.response ? (
                <div className="Detaile">
                    <div className="Detaile__hederBox">
                        <p>{content.title}</p>
                        {/*<p>پایتون چیست؟</p>*/}
                    </div>
                    <div>
                        <VideoPlayer src={content.video}/>
                    </div>
                    <p className="Detaile__txt leading-loose">
                        {content.short_description}
                    </p>
                </div>
            ) : null}
        </>

    );
}

export default Detaile;
