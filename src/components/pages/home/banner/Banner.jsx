// import logo from '../../../logo.svg';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Button from '../../../common/button/Button';

import React, { Component } from 'react';
import './Banner.scss';
import {Link} from "react-router-dom";
class Banner extends Component {
	render() {
		return (
			<div>
				<header className='App-header' id='main'>
					{/* <img src='images.jpg' className='App-logo' alt='logo' /> */}

					<p>Have you heard of croudfunding,</p>
					<h2>let's talk about smart investment</h2>
					<Link to='legal-information'>
					<Button text='FOR INVESTORS' isFilled={true} mediumWidth={true} className='mt-3' />
					</Link>
					<Link to={'/get-funded'}>
					<Button text='GET FUNDING' mediumWidth={true} withOutBackground={true} className='mt-3'>
						<i className='ml-2 move'>
							<TrendingFlatIcon />
						</i>
					</Button>
					</Link>
				</header>
			</div>
		);
	}
}
export default Banner;
