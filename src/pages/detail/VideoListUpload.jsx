import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const VideoListUpload = ({item} )=> {

    const iframeRef1= useRef(null);

    const iframeRef2= useRef(null);

    useEffect(() => {
        const height1 = iframeRef1.current.offsetWidth * 9/16 + 'px';
        iframeRef1.current.setAttribute('height', height1);

        const height2= iframeRef2.current.offsetWidth * 9/16 + 'px';
        iframeRef2.current.setAttribute('height', height2);
    }, []);

    return (
        <>
            <div className="video">
                <div className="video__title">
                    <h2>Trailer</h2>
                </div>
                <iframe
                    src={item.trailer}
                    ref={iframeRef1}
                    width="100%"
                    title="video"
                ></iframe>
            </div>

            <div className="video">
                <div className="video__title">
                    <h2>Video Demo</h2>
                </div>
                <iframe
                    src={item.video}
                    ref={iframeRef2}
                    width="100%"
                    title="video"
                ></iframe>
            </div>
        </>
    );
}

export default VideoListUpload;
