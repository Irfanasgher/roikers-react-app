import React, { Component } from 'react';
import Slider from 'react-slick';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import MainHeading from '../../../common/main-heading/MainHeading';
import './HowItWorks.scss';

class HowItWorks extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			pauseOnHover: true,
			draggable: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div id='works'>
				<Container>
					<MainHeading span='How' heading='it works' />
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div className='estimated'>
							<Image src='1.png' width='150px' className='image' style={{ marginLeft: '220px' }} />
						</div>
						<div color='textSecondary' className='estimated'>
							<h5>1</h5>
							<h2>Study of the franchisor profile</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						<div className='estimated1'>
							<Image
								src='CURVED-DOTTED.png'
								width='150px'
								className='image'
								width='70%'
								style={{ marginLeft: '220px' }}
							/>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div color='textSecondary' className='estimated'>
							<h5>2</h5>
							<h2>
								Franchise Study previous and its profitability
							</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>

						<div color='textSecondary' className='estimated'>
							<Image src='2.png' className='img2' />
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						<div className='estimated1'>
							<Image
								src='CURVED-DOTTED-2.png'
								width='150px'
								className='image'
								width='70%'
								style={{ marginLeft: '220px' }}
							/>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div color='textSecondary' className='estimated'>
							<Image src='3.png' width='270px' style={{ marginLeft: '80px' }} />
						</div>
						<div color='textSecondary' className='estimated'>
							<h5>3</h5>
							<h2>Study of the proposed project</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						<div className='estimated1'>
							<Image
								src='CURVED-DOTTED.png'
								width='150px'
								className='image'
								width='70%'
								style={{ marginLeft: '220px' }}
							/>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div color='textSecondary' className='estimated'>
							<h5>4</h5>
							<h2>Publication of the project on the web and dissemination</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>

						<div color='textSecondary' className='estimated'>
							<Image src='4.png' width='300px' className='img4' />
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						<div className='estimated1'>
							<Image
								src='CURVED-DOTTED-2.png'
								width='150px'
								className='image'
								width='70%'
								style={{ marginLeft: '220px' }}
							/>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div color='textSecondary' className='estimated'>
							<Image src='5.png' width='150px' style={{ marginLeft: '130px' }} />
						</div>
						<div color='textSecondary' className='estimated'>
							<h5>5</h5>
							<h2>
								Project financing completed and	Avios of all information to investors
							</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row'>
						<div className='estimated1'>
							<Image
								src='CURVED-DOTTED.png'
								width='150px'
								className='image'
								width='70%'
								style={{ marginLeft: '220px' }}
							/>
						</div>
					</div>
					<div className='d-flex justify-content-between align-items-center flex-row mt-md-5 mt-2'>
						<div color='textSecondary' className='estimated'>
							<h5>6</h5>
							<h2>
								Follow up on investors on the investment they made
							</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.
							</p>
						</div>

						<div color='textSecondary' className='estimated'>
							<Image src='6.png' width='300px' className='img6' />
						</div>
					</div>
					<Slider {...settings} className='d-block d-md-none'>
						<div>
							<Image src='1.png' width='150px' className='image img1 mb-5' />

							<h5>1</h5>
							<h2>
								Study of the franchisor profile
							</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
						<div>
							<Image src='2.png' className='image img2 mb-5' />
							<h5>2</h5>
							<h2>Franchise Study previous and its profitability</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
						<div>
							<Image src='3.png' width='270px' className='image img3 mb-5' />

							<h5>3</h5>
							<h2>Study of the proposed project</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
						<div>
							<Image src='4.png' width='300px' className='image img4 mb-5' />
							<h5>4</h5>
							<h2>Publication of the project on the web and dissemination</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
						<div>
							<Image src='5.png' width='150px' className='image img5 mb-5' />

							<h5>5</h5>
							<h2>
								Project financing completed and	Avios of all information to investors
							</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
						<div>
							<Image src='6.png' width='300px' className='image img6 mb-5' />
							<h5>6</h5>
							<h2>Follow up on investors on the investment they made</h2>
							<p className='mt-3 reference'>
								We will study franchises from the same sector as the franchisee who wants to get financing through the platform. Then there will be a personal interview with him to answer the questions.

							</p>
						</div>
					</Slider>
				</Container>
			</div>
		);
	}
}

export default HowItWorks;
