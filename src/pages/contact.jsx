import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


import { slideIn } from "../utils/motion";
import './contact.css';

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_v3hztj7",
				"template_8wrz8zc",
				{
					from_name: form.name,
					to_name: "Kiragu_Maina",
					reply_to: form.email,

					message: form.message,
				},
				"76_t19tZRNEIVIOpI"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);

					console.log(error);
					alert("Something went wrong.");
				}
			);
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							below to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
						<div className="section-title">

							<div
								className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
							>
								<motion.div
									variants={slideIn("left", "tween", 0.2, 1)}
									className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
								>
									<p>
										Please fill out the form below to send us an email and we will
										get back to you as soon as possible.
									</p>

									<form
										ref={formRef}
										onSubmit={handleSubmit}
										className="form-container"
									>
										<label className="form-label">
											<span>Your Name</span>
											<input
												type="text"
												name="name"
												value={form.name}
												onChange={handleChange}
												placeholder="What's your name?"
												className="form-input"
											/>
										</label>
										<label className="form-label">
											<span>Your email</span>
											<input
												type="email"
												name="email"
												value={form.email}
												onChange={handleChange}
												placeholder="What's your email?"
												className="form-input"
											/>
										</label>
										<label className="form-label">
											<span>Your Message</span>
											<textarea
												rows={7}
												name="message"
												value={form.message}
												onChange={handleChange}
												placeholder="Message"
												className="form-textarea"
											/>
										</label>

										<button
											type="submit"
											className="form-button"
										>
											{loading ? "Sending..." : "Send"}
										</button>
									</form>

								</motion.div>

								<motion.div
									variants={slideIn("right", "tween", 0.2, 1)}
									className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
								>

								</motion.div>
							</div>
						</div>


					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
