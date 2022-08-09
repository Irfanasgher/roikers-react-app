import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';

import { red } from '@material-ui/core/colors';
import Button from '../../../common/button/Button';

import ProgressBar from 'react-bootstrap/ProgressBar';

import './RateCalculationSection.scss';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

function RateCalculationSection() {
	const classes = useStyles();

	return (
		<div id='bestrate' className='p-md-5'>
			<Container>
				<div className='d-flex justify-content-between align-items-center flex-row m-3 row'>
					<div className='estimated col-md-6 col-12'>
						<h1>Calculate the best rate</h1>
						<h2>you want to obtains</h2>
						<p className='mt-3 reference'>
							Reference site about Lorem Ipsum, giving information on it,s origins, as well as random
							Lipsum generator.
						</p>
					</div>

					<div className='estimated col-md-6 col-12 mt-md-4 mt-none'>
						<Card className={classes.card}>
							<CardContent>
								<h3 className='mt-4'>
									Complete <span>your dates</span>
								</h3>

								<div variant='body2' color='textSecondary' component='p' className='amount mt-4'>
									Amount of money you want invest
								</div>
								<h4>
									<input type='text' placeholder='257.293' />
									<span> €</span>
								</h4>
								<ProgressBar now={100} className='mt-3 progressBar' />
								<div className='d-flex justify-content-between flex-row mt-4'>
									<div variant='body2' color='textSecondary' className='time mr-5'>
										Amount of time (tbd)
										<NavDropdown title='12 months' id='basic-nav-dropdown'>
											<NavDropdown.Item href='#action/3.1'>3 Months</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.2'>6 Months</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.3'>9 Months</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.3'>12 Months</NavDropdown.Item>
											{/*<NavDropdown.Divider />*/}
											{/*<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>*/}
										</NavDropdown>
										<div className='line1 line' />
									</div>

									<div variant='body2' color='textSecondary' className='time mr-1'>
										Amount of time (tbd)
										<NavDropdown title='8%' id='basic-nav-dropdown1' className='dropdown'>
											<NavDropdown.Item href='#action/3.1'>5% to 10%</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.1'>10% to 15%</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.1'>15% to 20%</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.1'>20% to 25%</NavDropdown.Item>
											<NavDropdown.Item href='#action/3.1'>25% to 30%</NavDropdown.Item>
											{/*<NavDropdown.Divider />*/}
											{/*<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>*/}
										</NavDropdown>
										<div className='line' />
									</div>
								</div>

								<div className='d-flex justify-content-between flex-row mt-3'>
									<div
										variant='body2'
										color='textSecondary'
										className='cash d-flex justify-content-between flex-row'>
										<img src='payment_method_icon-01.png' width='50' height='50' className='mr-3' />
										<p>
											CASH <br />FINAL
										</p>
										<br />
									</div>

									<div variant='body2' color='textSecondary' className='cash digit'>
										357.293 €
									</div>
								</div>
								<Link to={'/register'}>
								<Button
									text='REGISTER NOW'
									isFilled={true}
									fullWidth={true}
									className='mt-4 p-2'
									height1='30px'
								/>
								</Link>

							</CardContent>
						</Card>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default RateCalculationSection;
