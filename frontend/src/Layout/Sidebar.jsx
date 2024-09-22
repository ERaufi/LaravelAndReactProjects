import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <>
            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <a href="index.html">
                        <img src="assets/images/logo/logo.svg" alt="logo" />
                    </a>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/react-select" className="collapsed">
                                <span className="icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z"
                                        />
                                        <path
                                            d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Dynamic Select</span>
                            </Link>
                        </li>





                        <li className="nav-item">
                            <Link to="/intro-js" className="collapsed">
                                <span className="icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z"
                                        />
                                        <path
                                            d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z"
                                        />
                                    </svg>
                                </span>
                                <span className="text">Intro Js</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="overlay"></div>
        </>
    )
}
