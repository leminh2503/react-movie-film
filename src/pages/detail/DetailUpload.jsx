import React, {useEffect, useState} from 'react';
import {useParams}                  from 'react-router';

import tmdbApi   from '../../api/tmdbApi';

import './detail.scss';
import VideoListUpload from './VideoListUpload';


import MovieUpload from '../../components/movie-upload/MovieUpload';

const DetailUpload = () => {

    const {id} = useParams();

    const local = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detailUpload(id, {params: {}});
            setItem(response.movie);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [id]);

    console.log(item);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{backgroundImage: `url(${item.img})`}}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img"
                                     style={{backgroundImage: `url(${item.imgTitle ?? item.img})`}}></div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title}
                                </h1>
                                <div className="genres">
                                    <span className="genres__item">{item.genre}</span>
                                </div>
                                <p className="overview">{item.description}</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoListUpload item={item}/>
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    <h2>Similar</h2>
                                </div>
                                <MovieUpload />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default DetailUpload;
