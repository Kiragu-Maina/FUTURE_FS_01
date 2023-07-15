import React from "react";

function article_1() {
	return {
		date: "Mar 8, 2023",
		title: "Django Meets Flutter: Integrating the Backend and Frontend for Effortless App Development",
		description:
			"Streamline your development process with the power of these two complementary frameworks.",
		link: "https://www.makeuseof.com/django-flutter-integrating-backend-frontend-effortless-app-development/",
		keywords: [
			"Integration",
			"Django",
			"Flutter",
			"Kiragu Maina",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Feb 22, 2023",
		title: "Is Hosting Django on PythonAnywhere a Good Idea?",
		description:
			"PythonAnywhere is suitable for Django development, but how easy is it to set up?",
		style: ``,
		link: "https://www.makeuseof.com/is-hosting-django-on-pythonanywhere-a-good-idea/",
		keywords: [
			"Python Anywhere",
			"Django",
			"Hosting",
			"Kiragu Maina",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
