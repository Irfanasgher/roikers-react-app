import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import './Footer.scss';
class Footer extends Component {
	render() {
		return (
			<div id='footer'>
				<Container>
					<div className='d-flex flex-row justify-content-between pt-5 row'>
						<div className='estimated pt-5 pb-5 mr-md-5 mr-none col-md-3 col-12'>
							<h1>
								<Link to={'/'}>
									<img src='logo-01.png' width='200px' className='footer-logo' />
								</Link>
							</h1>
							<p>
								Reference site about Lorem Ipsum, giving information on its origins, as well as a rendom
								Lipsum site about Lorem Ipsum, fiving informa
							</p>
							{/* <button>View More</button> */}
							<div className='icon mt-3'>
								<a href={'https://www.facebook.com/'}>
									<i className='fa fa-facebook icon1' />
								</a>
								<a href={'https://twitter.com/?lang=en'}>
									<i className='fa fa-twitter icon1' />
								</a>
							</div>
						</div>
						<div className='estimated pt-5 pb-5 ml-md-5 ml-none col-md-2 col-12'>
							<h1>About Roikers </h1>
							<ul className='mt-4'>
								{/*<li>*/}
								{/*	<Link to={'/'}>*/}
								{/*		How it wroks*/}
								{/*	</Link>*/}
								{/*</li>*/}
								<li>
									<Link to='/about'>
										About us
									</Link>
								</li>
								<li>
									<Link to={'/opportunities'}>
										Opportunities
									</Link>
								</li>
								<li>
									<Link to={'/get-funded'}>
										Get Funding
									</Link>
								</li>
								<li>
									<Link to='/blog'>Blog</Link>
								</li>
								<li>
									<Link to='/contact'>Contact</Link>
								</li>
								<li>
									<Link to='/faq'>FAQ</Link>
								</li>
							</ul>
						</div>
						<div className='estimated pt-5 pb-5 col-md-2 col-12'>
							<h1>Legal</h1>

							<ul className='mt-4'>
								<li>Basic information</li>
								<li>Legal information</li>
								<li>Tarif politics</li>
								<li>Privacy policy and</li>
								<li>Cookies policy</li>
							</ul>
						</div>
						<div className='estimated pt-5 pb-5 col-md-3 col-12'>
							<h1>Madrid</h1>
							<ul className='mt-4'>
								<li>Principle de vergana, 112</li>
								<li>28002 Madrid, Esparia</li>
								<li style={{ fontWeight: 'bold' }}>+ 34 911 930 730</li>
								<li style={{ fontWeight: 'bold' }}>info@roikers.com</li>
							</ul>
						</div>
						<p className='d-flex justify-content-center col-md-12 col-12 p-3'
							style={{ alignItems: 'center', color: 'white', borderTop: '1px solid gray' }}>
							 All Rights Reserved By <a href={'https://www.thehexaa.com/'} style={{color: "white"}}> The Hexaa</a>
						</p>
					</div>
				</Container>
			</div>
		);
	}
}
export default Footer;
