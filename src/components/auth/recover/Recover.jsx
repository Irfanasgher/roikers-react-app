import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/button/Button';
import './Recover.scss';
class Recover extends Component {
	render() {
		return (
			<div id='recuperar' className='row'>
				<div className='col-md-6 col-12 recuperar'>
					<Link to='/'>
						<img src='logo-02.png' className='logo' />
					</Link>
					<img src='recuperar.png' className='recuperar-image' />
					<div className='d-md-block d-none gratuito'>
						<h1>Free Registration</h1>
						<p>
							We will analyze the franchisor who wants to finance his next project through the
							platform. To see if he is fit to work with us
						</p>
					</div>
				</div>
				<div className='col-md-6 col-12 d-flex align-items-center right-side justify-content-center mt-md-none mt-5'>
					<div>
						<h1>
							<span> Recover</span> password
						</h1>
						<h3>Enter your email and we will send you a new password.</h3>
						<h6>You can change it in your private area:</h6>
						<div className='input-data mt-5 mb-5'>
							<p>Email</p>
							<input type='text' placeholder='pedro.morales.duarte@gmail.com' />
						</div>

						<Button text='RECOVEER' isFilled={true} />
					</div>
				</div>
			</div>
		);
	}
}

export default Recover;
