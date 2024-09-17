import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/flutter.css";

const FlutterPortfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "flutter");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Flutter Portfolio | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="flutter" />
                <div className="content-wrapper">
                    <div className="flutter-logo-container">
                        <div className="flutter-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="flutter-container">
                        <div className="flutter-main">
                            <div className="flutter-right-side">
                                <div className="title flutter-title">
                                    {INFO.flutter.title}
                                </div>

                                <div className="subtitle flutter-subtitle">
                                    {INFO.flutter.description}
                                </div>

                                <div className="flutter-projects">
                                    {/* Project 1: Bus Management System */}
                                    <div className="flutter-project">
                                        <h3>Bus Management System</h3>
                                        <p>
                                            This project involved the development of a smart bus system that enforced passenger limits, streamlined ticket purchases, and integrated a real-time passenger counting system. I built the mobile app using Flutter to provide an intuitive experience for passengers and admins.
                                        </p>
                                        <ul>
                                            <li>Real-time bus capacity updates</li>
                                            <li>Ticket purchasing and cashless payments</li>
                                            <li>Admin dashboard for passenger count and payment data</li>
                                        </ul>
                                        <img src="bus-management-screenshot.jpg" alt="Bus Management System" className="flutter-project-image" />
                                    </div>

                                    {/* Project 2: DelTrack Delivery System */}
                                    <div className="flutter-project">
                                        <h3>DelTrack Delivery System</h3>
                                        <p>
                                            I developed the mobile aspect of the DelTrack system using Flutter to facilitate real-time tracking of deliveries, customer notifications, and route updates for salesmen. The app provides a seamless interface for both customers and delivery personnel.
                                        </p>
                                        <ul>
                                            <li>Real-time delivery tracking</li>
                                            <li>Customer notifications and location tracking</li>
                                            <li>Admin dashboard for route and status updates</li>
                                        </ul>
                                        <img src="deltrack-screenshot.jpg" alt="DelTrack Delivery System" className="flutter-project-image" />
                                    </div>
                                </div>
                            </div>

                            <div className="flutter-left-side">
                                <div className="flutter-image-container">
                                    <div className="flutter-image-wrapper">
                                        <img src="flutter-portfolio.jpg" alt="Flutter Portfolio" className="flutter-image" />
                                    </div>
                                </div>

                                <div className="flutter-socials">
                                    <Socials />
                                </div>
                            </div>
                        </div>

                        <div className="flutter-socials-mobile">
                            <Socials />
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FlutterPortfolio;
