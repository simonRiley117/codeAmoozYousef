import React, {useEffect, useState} from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "@App/Context/useFetch";
import {useAuth} from "@App/Context/authContext";

function Detail({contentUuid}) { 
    console.log('contentUuid: ', contentUuid)
    const [content, setContent] = useState(null);
    const {token, authDispatch} = useAuth();
    // const [contentId, setContentId] = useState(null);

    // setContentId(prevContent => prevContent !== contentUuid ? contentUuid : prevContent)

    const getContent = useFetch({
        url: `ContentService/${contentUuid}/getModalContent`,
        method: "GET",
        noHeader: token ? false : true,
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

export default Detail;
