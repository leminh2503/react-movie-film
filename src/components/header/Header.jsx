import React, {useRef, useEffect, useState} from 'react';

import {Link, useHistory, useLocation} from 'react-router-dom';

import './header.scss';

import logo                                                 from '../../assets/tmovie.png';

import Button from "../button/Button"
const Header = () => {
    const accessToken = localStorage.getItem("access_token")

    const history = useHistory();

    const headerNav = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Movies',
            path: '/movie'
        },
        {
            display: accessToken ? "Upload" : "Login",
            path: accessToken ? "/upload" : "/login",
        }
    ];

    const {pathname} = useLocation();

    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <>
            <div ref={headerRef} className="header">
                <div className="header__wrap container">
                    <div className="logo">
                        <img src={logo} alt=""/>
                        <Link to="/">MinhMovies</Link>
                    </div>
                    <ul className="header__nav">
                        {
                            headerNav.map((e, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`}>
                                    <Link to={e.path}>
                                        {e.display}
                                    </Link>
                                </li>
                            ))
                        }
                        {
                            accessToken && <Button onClick={handleLogout} >
                                Logout
                            </Button>
                        }
                    </ul>
                </div>

            </div>
        </>
    );
};

export default Header;
