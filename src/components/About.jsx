import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Us</SectionTitle>
				<h2 className="text-md text-gray-600 dark:text-gray-300 py-2">“We are not an IT Firm; we are an Ideation Agency.”</h2>
				<p className="text-md text-gray-600 dark:text-gray-300">
					Established in 2021, Cyatt is a team of creators, thinkers and researchers aiming to solve business challenges via developing future-ready apps, websites and digital solutions for our clients. We assist our clients in developing innovative designs and thoughtful products by offering premium IT solutions. Our team covers specialists in web development, graphic designing & digital marketing. We are a multi-disciplinary agency that aims to empower your business via delivering premium tech solutions.
				</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					team@cyatt.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
