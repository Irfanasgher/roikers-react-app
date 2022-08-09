import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './OpportunityCardSection.scss';
import MainHeading from '../../../common/main-heading/MainHeading';
import Button from '../../../common/button/Button';
import Card from '../../../card/Card';
import {Link} from "react-router-dom";
class OpportunityCardSection extends Component {
	render() {
		return (
			<div id='opportunities'>
				<MainHeading span='Lasted' heading='Opportunities' />
				<Container className='d-flex flex-row justify-content-between row'>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
					<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'>
						<Card />
					</div>
				</Container>
				<Link to={'/opportunities'}>
					<Button text='VIEW MORE' className='mb-5 mt-1' pading='50px' />
				</Link>
			</div>
		);
	}
}

export default OpportunityCardSection;
