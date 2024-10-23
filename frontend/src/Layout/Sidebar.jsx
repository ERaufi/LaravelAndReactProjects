import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartPie, faChartLine, faChartArea, faCubes, faMapMarkerAlt, faBoxOpen, faListAlt, faHandPointer } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    return (
        <>
            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <a href="index.html">
                        <img src="assets/images/logo/ERLogo.png" style={{ width: 100 }} alt="logo" />
                        <p>Code With ERaufi</p>
                    </a>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/react-select" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faHandPointer} />
                                </span>
                                <span className="text">Dynamic Select</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/intro-js" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faListAlt} />
                                </span>
                                <span className="text">Intro Js</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/dynamic-form" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faBoxOpen} />
                                </span>
                                <span className="text">Dynamic Form</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/bar-chart" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChartBar} />
                                </span>
                                <span className="text">Bar Chart</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/donut-chart" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChartPie} />
                                </span>
                                <span className="text">Donut Chart</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/line-chart" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChartLine} />
                                </span>
                                <span className="text">Line Chart</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/pie-chart" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChartPie} />
                                </span>
                                <span className="text">Pie Chart</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/stackbar-chart" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faChartArea} />
                                </span>
                                <span className="text">Stack Bar Chart</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/country-cities" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </span>
                                <span className="text">Country Cities Select</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/multi-select" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faCubes} />
                                </span>
                                <span className="text">Multi Select</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products-table" className="collapsed">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faCubes} />
                                </span>
                                <span className="text">DataTable</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
