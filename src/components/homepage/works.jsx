import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src=""
								alt=""
								className="work-image"
							/>
							<div className="work-title">Njeki Transporters</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - March 2023</div>
						</div>

						<div className="work">
							<img
								src=""
								alt=""
								className="work-image"
							/>
							<div className="work-title">Pososta</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">April 2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
