import React from 'react'
import './Hero.scss';
import NavigationItem from '../../atoms/navigation-item/NavigationItem';

const Hero = () => {

let navigationItems=['About','Mission','Portfolio'];

  return (
		<main>
			<h1>We create the future in your house</h1>
			<div className="wrapper">
				<div className="navigation">
					<h2>Château d'Excellence</h2>
					<nav>
						<ul>
							{navigationItems.map((navItem, index) => {
								return <NavigationItem key={index} text={navItem} />;
							})}
						</ul>
					</nav>
					<p>
						We will turn the idea into reality. We do it when others refuse. If
						you have non-standard ideas, but you don't know how to turn them
						into reality, then come to us. Your ideas are our ideas.
					</p>
				</div>
				<div className="img-container"></div>
			</div>
		</main>
	);
}

export default Hero