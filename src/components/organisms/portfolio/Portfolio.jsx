import React from 'react'
import './Portfolio.scss';

const Portfolio = () => {
  return (
		<section className="portfolio">
			<div className="portfolio__about">
				<h2>Portfolio</h2>
				<p>
					The perfect combination of interior items creates a complete picture.
					Impressions about the apartment, decorated in a modern style - light,
					air, space, harmony. Our team are true professionals with extensive
					experience. Each of our employees has excellent coding skills to
					create the best websites.
				</p>
			</div>
			<div className="portfolio-img portfolio__img-1"></div>
			<div className="portfolio-img portfolio__img-2"></div>
			<div className="portfolio-img portfolio__img-3"></div>
			<div className="portfolio-img portfolio__img-4"></div>
			<div className="portfolio-img portfolio__img-5"></div>
		</section>
	);
}

export default Portfolio