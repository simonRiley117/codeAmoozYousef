import React, {useEffect, useState} from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "../../../../Context/useFetch";
import {useAuth} from "../../../../Context/authContext";

function Detaile({contentUuid}) {
    console.log('contentUuid Detaile: ', contentUuid)
    const [content, setContent] = useState(null);
    // const [contentId, setContentId] = useState(null);
    // setContentId(prevContent => prevContent !== contentUuid ? contentUuid : prevContent)

    const getContent = useFetch({
        url: `ContentService/${contentUuid}/getModalContent`,
        method: "GET",
        noHeader: false,
        setter: setContent
    });

    // useEffect(() => {
    //     getContent.reFetch()
    // }, [contentId]);

    // getContent.reFetch()
    // console.log('getContent: ', getContent)
    console.log('content: ', content)
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
