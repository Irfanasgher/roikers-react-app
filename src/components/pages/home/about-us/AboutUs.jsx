import React, { Component } from 'react';
import Slider from 'react-slick';

import { Container } from '@material-ui/core';
import Image from 'react-bootstrap/Image';
// import Container from 'react-bootstrap/Container';

import './AboutUs.scss';
import MainHeading from '../../../common/main-heading/MainHeading';
class AboutUs extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			arrow: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div id='about' className='mb-5'>
				<Container>
					<MainHeading span='About us' heading='Roikers' className='pt-5 mb-5' />
					<div className='d-flex justify-content-around align-items-center flex-row mt-5 row '>
						<div color='textSecondary' className='estimated col-md-3 col-12 mt-2 d-md-block d-none'>
							<Image src='Objeto inteligente vectorial4-01.png' width='80px' className='mb-4' />
							<h1>123,000 €</h1>
							<p>Total of invested money</p>
						</div>

						<div color='textSecondary' className='estimated col-md-3 col-12 mt-2 d-md-block d-none'>
							<Image
								src='Objeto inteligente vectorial5-01.png'
								width='70px'
								height='110px'
								className='mb-4'
								style={{ marginTop: '-20px' }}
							/>
							<h1>16</h1>
							<p>Number of projects funded</p>
						</div>
						<div color='textSecondary' className='estimated col-md-3 col-12 mt-2 d-md-block d-none'>
							<Image src='Objeto inteligente vectorial11-01.png' width='100px' className='mb-4' />
							<h1>20.6%</h1>
							<p>Average TIR</p>
						</div>

						<div color='textSecondary' className='estimated col-md-3 col-12 mt-2 d-md-block d-none'>
							<Image
								src='Objeto inteligente vectorial2.png'
								width='70px'
								height='100px'
								className='mb-4'
								style={{ marginTop: '-20px' }}
							/>
							<h1>1500</h1>
							<p>People registered</p>
						</div>
					</div>
				</Container>
				<Slider {...settings} className='d-md-none d-block'>
					<div>
						<Image src='Objeto inteligente vectorial4-01.png' width='80px' className='mb-4 images' />
						<h1>123,000,000 €</h1>
						<p>Total of invested money</p>
					</div>
					<div>
						<Image
							src='Objeto inteligente vectorial5-01.png'
							width='70px'
							height='110px'
							className='mb-4 images'
						/>
						<h1>16</h1>
						<p>Number of projects funded</p>
					</div>
					<div>
						<Image src='Objeto inteligente vectorial11-01.png' width='100px' className='mb-4 images' />
						<h1>20.6%</h1>
						<p>Average TIR</p>
					</div>
					<div>
						<Image
							src='Objeto inteligente vectorial2.png'
							width='70px'
							height='100px'
							className='mb-4 images'
						/>
						<h1>1500</h1>
						<p>People registered</p>
					</div>
				</Slider>
			</div>
		);
	}
}

export default AboutUs;
