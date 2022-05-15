import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import tmdbApi, { category } from '../../api/tmdbApi';

import MovieCard from '../movie-card/MovieCard';

import MovieCardUpload from "../movie-card-upload/MovieCardUpload";

const MovieUpload = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMovies( {params});
                console.log("keet qua: ", response);
                setItems(response)
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, [])

    console.log(items)

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCardUpload item={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default MovieUpload;
