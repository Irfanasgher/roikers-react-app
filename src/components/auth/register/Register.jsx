import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/button/Button';

import './Register.scss';
class Register extends Component {
	render() {
		return (
			<div id='register' className='row'>
				<div className='col-md-6 col-12 register'>
					<Link to='/'>
						<img src='logo-02.png' className='logo' />
					</Link>
					<img src='register.png' className='register-image' />
					<div className='d-md-block d-none gratuito'>
						<h1>Free Registration</h1>
						<p>
							We will analyze the franchisor who wants to finance his next project through the
							platform. To see if he is fit to work with us
						</p>
					</div>
				</div>
				<div className='col-md-6 col-12 d-flex align-items-center right-side justify-content-center mt-md-none mt-5 p-3'>
					<div>
						<h1>
							<span>Become </span> a Roiker
						</h1>
						<h3>
							If you already have an account <Link to='login'> Enter here</Link>
						</h3>

						<div className='input-data mt-3'>
							<p>Names </p>
							<input type='text' placeholder='Pedro Manuel' />
						</div>
						<div className='d-flex justify-content-between'>
							<div className='input-data mt-3'>
								<p>Surname</p>
								<input type='text' className='halfWidth' placeholder='Morales' />
							</div>
							<div className='input-data mt-3'>
								<p>Second surname</p>
								<input type='text' placeholder='Duarte' />
							</div>
						</div>
						<div className='d-flex justify-content-between'>
							<div className='input-data mt-3'>
								<p>Telephone</p>
								<input type='text' className='halfWidth' placeholder='09409404940' />
							</div>
							<div className='input-data mt-3' />
						</div>
						<div className='input-data mt-3'>
							<p>Email</p>
							<input type='text' placeholder='pedro.morales.duarte@gmail.com' />
						</div>
						<div className='olvidaste pt-2 mb-5'>
							<input type='checkbox' />
							<p>
								I accept the <Link> terms and conditions</Link>
							</p>
						</div>
						<Button text='CREATE ACCOUNT' isFilled={true} />
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
