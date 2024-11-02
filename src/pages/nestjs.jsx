import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/nestjs.css";

const WorkingWithNestJS = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "nestjs");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Working with NestJS | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="working-with-nestjs" />
				<div className="content-wrapper">
					<div className="nestjs-logo-container">
						<div className="nestjs-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="nestjs-container">
						<div className="title nestjs-title">
							Getting Started with NestJS
						</div>

						<div className="subtitle nestjs-subtitle">
                            The google docs shows my workings with nestjs. The screenshots provided are of my terminal.
						</div>

						<div className="embedded-google-doc">
							<iframe
								src="https://docs.google.com/document/d/1FEWUNKh2Pm0VzJBHOoe_2zYl_kGYp-8vTwMhDIPiLIY/edit?usp=sharing"
								width="100%"
								height="500px"
								frameBorder="0"
								title="NestJS Guide"
								allowFullScreen
							></iframe>
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

export default WorkingWithNestJS;
