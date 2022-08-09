import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/button/Button';
import './Login.scss';
class Login extends Component {
	render() {
		return (
			<div id='login' className='row'>
				<div className='col-md-6 col-12 login'>
					<Link to='/'>
						<img src='logo-02.png' className='logo' />
					</Link>
					<img src='login.png' className='login-image' />
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
							<span>Access your </span>private area
						</h1>
						<h3>If you're not a Roikers yet, what are you waiting for?</h3>
						<h5><Link to='register'>Register here</Link></h5>
						<div className='input-data mt-md-5 mt-3'>
							<p>Email</p>
							<input type='text' placeholder='usuario@gmail.com' />
						</div>
						<div className='input-data mt-md-5 mt-3'>
							<p>Password</p>
							<input type='password1' placeholder='*********' />
						</div>
						<div className='olvidaste pt-2 mb-5'>
							<p><Link to='recover'>Did you forget your password</Link></p>
						</div>
						<Button text='ENTEROKAY' isFilled={true} />
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
