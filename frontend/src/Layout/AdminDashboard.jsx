import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Preloader Component
const Preloader = () => {
    return (
        <div id="preloader">
            <div className="spinner"></div>
        </div>
    );
};

// Sidebar Component
const Sidebar = () => {
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    const [isMenuOpen4, setIsMenuOpen4] = useState(false);

    return (
        <aside className="sidebar-nav-wrapper">
            <div className="navbar-logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo.svg" alt="logo" />
                </a>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="nav-item nav-item-has-children">
                        <a
                            href="#0"
                            className={isMenuOpen1 ? '' : 'collapsed'}
                            onClick={() => setIsMenuOpen1(!isMenuOpen1)}
                            aria-expanded={isMenuOpen1}
                        >
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z"
                                    />
                                    <path
                                        d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z"
                                    />
                                </svg>
                            </span>
                            <span className="text">Dashboard</span>
                        </a>
                        <ul id="ddmenu_1" className={`collapse dropdown-nav ${isMenuOpen1 ? 'show' : ''}`}>
                            <li>
                                <a href="index.html">eCommerce</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item nav-item-has-children">
                        <a
                            href="#0"
                            className={isMenuOpen2 ? '' : 'collapsed'}
                            onClick={() => setIsMenuOpen2(!isMenuOpen2)}
                            aria-expanded={isMenuOpen2}
                        >
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8097 1.66667C11.8315 1.66667 11.8533 1.6671 11.875 1.66796V4.16667C11.875 5.43232 12.901 6.45834 14.1667 6.45834H16.6654C16.6663 6.48007 16.6667 6.50186 16.6667 6.5237V16.6667C16.6667 17.5872 15.9205 18.3333 15 18.3333H5.00001C4.07954 18.3333 3.33334 17.5872 3.33334 16.6667V3.33334C3.33334 2.41286 4.07954 1.66667 5.00001 1.66667H11.8097ZM6.66668 7.70834C6.3215 7.70834 6.04168 7.98816 6.04168 8.33334C6.04168 8.67851 6.3215 8.95834 6.66668 8.95834H10C10.3452 8.95834 10.625 8.67851 10.625 8.33334C10.625 7.98816 10.3452 7.70834 10 7.70834H6.66668ZM6.04168 11.6667C6.04168 12.0118 6.3215 12.2917 6.66668 12.2917H13.3333C13.6785 12.2917 13.9583 12.0118 13.9583 11.6667C13.9583 11.3215 13.6785 11.0417 13.3333 11.0417H6.66668C6.3215 11.0417 6.04168 11.3215 6.04168 11.6667ZM6.66668 14.375C6.3215 14.375 6.04168 14.6548 6.04168 15C6.04168 15.3452 6.3215 15.625 6.66668 15.625H13.3333C13.6785 15.625 13.9583 15.3452 13.9583 15C13.9583 14.6548 13.6785 14.375 13.3333 14.375H6.66668Z"
                                    />
                                    <path
                                        d="M13.125 2.29167L16.0417 5.20834H14.1667C13.5913 5.20834 13.125 4.74197 13.125 4.16667V2.29167Z"
                                    />
                                </svg>
                            </span>
                            <span className="text">Pages</span>
                        </a>
                        <ul id="ddmenu_2" className={`collapse dropdown-nav ${isMenuOpen2 ? 'show' : ''}`}>
                            <li>
                                <a href="settings.html">Settings</a>
                            </li>
                            <li>
                                <a href="blank-page.html" className="active">Blank Page</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a href="invoice.html">
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.33334 3.35442C3.33334 2.4223 4.07954 1.66666 5.00001 1.66666H15C15.9205 1.66666 16.6667 2.4223 16.6667 3.35442V16.8565C16.6667 17.5519 15.8827 17.9489 15.3333 17.5317L13.8333 16.3924C13.537 16.1673 13.1297 16.1673 12.8333 16.3924L10.5 18.1646C10.2037 18.3896 9.79634 18.3896 9.50001 18.1646L7.16668 16.3924C6.87038 16.1673 6.46298 16.1673 6.16668 16.3924L4.66668 17.5317C4.11731 17.9489 3.33334 17.5519 3.33334 16.8565V3.35442ZM4.79168 5.04218C4.79168 5.39173 5.0715 5.67155 5.41668 5.67155H14.5833C14.9285 5.67155 15.2083 5.39173 15.2083 5.04218C15.2083 4.69263 14.9285 4.41282 14.5833 4.41282H5.41668C5.0715 4.41282 4.79168 4.69263 4.79168 5.04218ZM5.41668 9.16666C5.0715 9.16666 4.79168 8.88685 4.79168 8.5373C4.79168 8.18775 5.0715 7.90793 5.41668 7.90793H10.8333C11.1785 7.90793 11.4583 8.18775 11.4583 8.5373C11.4583 8.88685 11.1785 9.16666 10.8333 9.16666H5.41668ZM4.79168 11.9799C4.79168 11.6303 5.0715 11.3505 5.41668 11.3505H9.16668C9.51185 11.3505 9.79168 11.6303 9.79168 11.9799C9.79168 12.3294 9.51185 12.6093 9.16668 12.6093H5.41668C5.0715 12.6093 4.79168 12.3294 4.79168 11.9799Z"
                                    />
                                </svg>
                            </span>
                            <span className="text">Invoice</span>
                        </a>
                    </li>

                </ul>
            </nav>
        </aside>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Notifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Main Admin Dashboard Layout Component
const AdminDashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="admin-dashboard">
            {isLoading && <Preloader />}

            <Sidebar />

            <main className="content">
                <Navbar />

                <div className="container">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome to your admin dashboard!</p>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
