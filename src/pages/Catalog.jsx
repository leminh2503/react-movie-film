import React, {useState} from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate }                    from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
import Login     from "../components/login/Login";
import Upload    from "../components/upload/Upload";

const Catalog = () => {

    const { category } = useParams();

    const local = useParams();

    return (
        <>
            <PageHeader>
                {category === "movie" && 'Movies'}
                { category === "login" && "Login"}
                { category === "upload" && "Upload"}
            </PageHeader>
            { category === cate.movie &&
                <div className="container">
                    <div className="section mb-3">
                        <MovieGrid category={category}/>
                    </div>
                </div>
            }
            { category === "login" && <Login />}
            { category === "upload" && <Upload />}
        </>
    );
}

export default Catalog;
