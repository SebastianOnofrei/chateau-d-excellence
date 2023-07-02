import React from 'react'
import './About.scss';

const About = () => {
  return (
		<section className="about" id="about">
			<div className="about-photo1"></div>
			<div className="about-intro">
				<h2>We know very well what to do</h2>
				<p>
					The documentation is the basis for drawing up a plan for engineering
					and construction and finishing works, calculating estimates, a
					schedule for financing and performing work, as well as directly for
					their implementation. Visualization of a design project in 3D space,
					which is evaluated and corrected by you. Regular visits by our
					specialist to the object.
				</p>
			</div>
			<div className="about-details">
				<h3>Everything step by step</h3>
				<p>
					Our designers will help you choose the right materials within your
					budget, advise you on the features of their operation, and managers,
					together with a construction engineer, will draw up a detailed
					estimate for the cost of procurement and work on their application at
					the facility.
				</p>
        <div className="decorational-line"></div>
			</div>
			<div className="about-photo2"></div>
		</section>
	);
}

export default About