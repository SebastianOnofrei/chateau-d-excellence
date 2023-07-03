import React from 'react'
import './Newsletter.scss';
import marker from '../../../assets/marker.svg';
import phone from '../../../assets/phone.svg';

const Newsletter = () => {

  let exploreLinks = ['About us', 'Search', 'FAQs' ,'Blog'];
  let policyLinks = ['Contact us', 'Privacy Policy', 'Terms of Service'];

  return (
		<section className="newsletter">
			<div className="connect">
				<h5>Connect with us</h5>
				<p>Subscribe to get notified about new design and news. </p>
				<form action="#">
					<input type="email" name="email" id="email" placeholder='Email address' />
					<button>Join</button>
				</form>
			</div>
			<div className="links">
				<div className="location">
					<h5>Location</h5>
					<div className="location-google-map">
						<span>
							<img src={marker} alt="marker" />
						</span>
						<p>3A Vicksburg St, San Francisco, USA</p>
					</div>
					<div className="phone">
						<span>
							<img src={phone} alt="phone" />
						</span>
						<a href="tel:+123456789" className='phone-line'>+123 456 789</a>
					</div>
				</div>
				<div className="explore">
					<h5>Explore</h5>
					<ul>
						{exploreLinks.map((link, index) => {
							return (
								<li key={index}>
									<a href={link} className="footer-link">
										{link}
									</a>
									<span className="decorational-line"></span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="policy">
					<h5>Policy</h5>
					<ul>
						{policyLinks.map((link, index) => {
							return (
								<li key={index}>
									<a href={link} className="footer-link">
										{link}
									</a>
									<span className="decorational-line"></span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Newsletter