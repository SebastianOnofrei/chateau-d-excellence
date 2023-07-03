import React from 'react'
import './OurMission.scss';

const OurMission = () => {
  return (
		<section className="our-mission" id='Mission'>
			<div className="our-mission__intro">
				<h2>Our mission</h2>
				<h2>make your dreams come true</h2>
				<p>
					We will help you at every step: from the author's interior design, to
					repair and furniture selection. The team works every day to make the
					arrangement of your home as convenient and enjoyable as possible.
				</p>
				<div className="our-mission__details">
					<h3>We understand you</h3>
					<p>
						We know the value of your personal time and do everything so that
						you do not waste it on unnecessary meetings, shopping trips,
						organizing meetings and monitoring performers. We know that repairs
						are a big expense for you, so we give you the opportunity to save
						your budget on everything from materials and furniture to services,
						without compromising the quality of goods and services.
					</p>
				</div>
			</div>
			<div className="our-mission__img-container"></div>
		</section>
	);
}

export default OurMission