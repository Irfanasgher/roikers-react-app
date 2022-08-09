import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '../common/button/Button';

import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Slider from '@material-ui/core/Slider';

import './Card.scss';
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export default function RecipeReviewCard() {
	const classes = useStyles();

	return (
		<div id='card'>
			{/* <Container className='d-flex flex-row justify-content-between row'>
			<div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-5'> */}
			<Card className={classes.card}>
				<CardHeader
					action={
						<Avatar aria-label='recipe' className={classes.avatar}>
							<img
								src='sweden.png'
								width='40px'
								height='40px'
								style={{ border: '3px solid white', borderRadius: '30px', zIndex: '111' }}
							/>
						</Avatar>
					}
					title='100 montaditos'
					subheader='Construction'
				/>
				<CardMedia className={classes.media} image='paella.jpg' title='Paella dish' />
				<CardContent>
					<h5>Type Rade</h5>
					<Typography variant='body2' color='textSecondary' component='p' className='para'>
						We come from Visa, Apple, and PayPal and we're here to make payments painless for software platforms.
					</Typography>
					<div className='d-flex justify-content-between flex-row'>
						<div>
							<Typography variant='body2' color='textSecondary' component='p' className='para mt-3'>
								Financed
							</Typography>
							<h4>257.293 €</h4>
						</div>
						<div>
							<Typography variant='body2' color='textSecondary' component='p' className='para mt-3'>
								Objectives
							</Typography>
							<h4>600.160 €</h4>
						</div>
					</div>

					<Slider
						defaultValue={42.8}
						aria-labelledby='discrete-slider-always'
						valueLabelDisplay='on'
						disabled={true}
						className='mt-4'
					/>
					{/*<ProgressBar now={75.07} label={`${75.07}%`} value={70} className='mt-3 progressBar' />*/}
					<div className='d-flex justify-content-between flex-row mt-3'>
						<Typography variant='body2' color='textSecondary' className='investors'>
							<PeopleOutlineIcon style={{ color: 'gray' }} />
							<span>130 </span>Investors
						</Typography>
						<Typography variant='body2' color='textSecondary' className='investors'>
							|
						</Typography>

						<Typography variant='body2' color='textSecondary' className='investors'>
							{/* <DateRangeIcon tyle={{ color: 'gray' }} /> */}
							<i className='fa fa-calendar' />
							<span>10 </span>Remaining Days
						</Typography>
					</div>
					<hr className='mt-4 hrStyling' />

					<div className='d-flex justify-content-between flex-row mt-3'>
						<Typography variant='body2' color='textSecondary' className='estimated'>
							TIR for the project
							<br />
							<span>11.5%</span>
						</Typography>
						<Typography variant='body2' color='textSecondary' className='estimated'>
							Estimated return
							<br />
							<span>21.5%</span>
						</Typography>
						<Typography variant='body2' color='textSecondary' className='estimated'>
							Date started
							<br />
							<span>10.09.19</span>
						</Typography>
					</div>
					<Link to={'/specific-opportunities'}>
					<Button text='TO INVEST' className='mt-4' isFilled={true} fullWidth={true} size='16px' />
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}
