import React, { Component } from 'react';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import './Scoring.scss';
import DoneIcon from '@material-ui/icons/Done';
class Scoring extends Component {
	render() {
		return (
			<div id='scoring' className='row d-flex justify-content-center '>
				<div className='col-md-10 col-md-offset-1 d-md-block d-none'>
					<div className='row d-flex justify-content-between'>
						<div className='col-md-6 col-12 scoring'>
							<h6>
								SCORING <span>CALIDAD DE INVERSION</span>
							</h6>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-green' />
									<StarRoundedIcon className='icon-green' />
									<StarRoundedIcon className='icon-green' />
									<span>Optima</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-green' />
									<StarRoundedIcon className='icon-green' />
									<span className='alta'>Alta</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-green' />
									<span className='alta1'>Alta</span>
								</h5>
							</div>
						</div>
						<div className='col-md-6 col-12 scoring'>
							<h6>
								SCORING <span>CALIDAD DE INVERSION</span>
							</h6>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gold' />
									<StarRoundedIcon className='icon-gold' />
									<StarRoundedIcon className='icon-gold' />
									<span>Beuna</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gold' />
									<StarRoundedIcon className='icon-gold' />
									<span className='alta'>Satisfactoria</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gold' />
									<span className='alta1'>Satisfactoria</span>
								</h5>
							</div>
						</div>
						<div className='col-md-6 col-12 scoring mt-5 pt-5'>
							<h6>
								SCORING <span>CALIDAD DE INVERSION</span>
							</h6>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gray' />
									<StarRoundedIcon className='icon-gray' />
									<StarRoundedIcon className='icon-gray' />
									<span>Minima</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gray' />
									<StarRoundedIcon className='icon-gray' />
									<span className='alta'>Cuestionable</span>
								</h5>
							</div>
							<div className='optima mt-3'>
								<h5>
									<StarRoundedIcon className='icon-gray' />
									<span className='alta1'>Cuestionable</span>
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Scoring;
