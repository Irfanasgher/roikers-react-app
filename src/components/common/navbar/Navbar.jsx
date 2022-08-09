import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import LanguageIcon from '@material-ui/icons/Language';
import './Navbar.scss';

const navList = [
	{
		text: 'About us',
		to: '/about'
	},
	// {
	// 	text: 'How it Works',
	// 	to: '/'
	// },
	{
		text: 'Opportunities',
		to: '/opportunities'
	},
	{
		text: 'Get Funded',
		to: '/get-funded'
	},
	{
		text: 'Statistics',
		to: '/rating'
	},
	{
		text: 'Blog',
		to: '/blog'
	}
	// {
	// 	text: 'EN',
	// 	dropdown1: [
	// 		{
	// 			text: 'About us'
	// 		},
	// 		{
	// 			text: 'Urdu'
	// 		},
	// 		{
	// 			text: 'English'
	// 		}
	// 	]
	// }
];

const dropData = [
	{
		dropdown: 'Spanish'
	},
	{
		dropdown: 'English'
	}
];
class NavbarClass extends Component {
	render() {
		const renderedNaveList = navList.map((data, index) => {
			return (
				<li className='nav-item' key={index}>
					<Link to={`${data.to}`} className='nav-link'>
						{data.text}
					</Link>
				</li>
			);
		});
		const renderedDropData = dropData.map((data, index) => {
			return (
				<a className='dropdown-item' href='#' key={index}>
					{data.dropdown}
					<div className='dropdown-divider' />
				</a>
			);
		});
		return (
			<div id='nav'>
				<nav className={`navbar navbar-expand-xl ${this.props.backgroundWhite ? 'change-background' : ''}`}>
					<div className='container-fluid'>
						<a className='navbar-brand' href='#'>
							<Link to='/'>
								<img
									src={`${this.props.logo ? 'logo-02.png' : 'logo-01.png'}`}
									width='200px'
									className='navbar-logo'
								/>
							</Link>
						</a>
						<button className='navbar-toggler' data-toggle='collapse' data-target='#navbarNav'>
							<span className='fa fa-navicon' />
						</button>
						<div className='collapse navbar-collapse' id='navbarNav'>
							<ul className='navbar-nav ml-auto d-flex align-md-items-center'>
								{renderedNaveList}
								{/* <li className='nav-item'>
									<a className='nav-link' href='#'>
										About us
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										How it specific-opportunities
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										opportunity-card-section
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Get Funded
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Statistics
									</a>
								</li>

								<li className='nav-item'>
									<a className='nav-link' href='#'>
										Blog
									</a>
								</li> */}
								<LanguageIcon className='move-left d-lg-block d-none' />
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='navbarDropdown'
										role='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										EN
									</a>
									<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
										{renderedDropData}
										{/* <a className='dropdown-item' href='#'>
											Action
										</a>
										<a className='dropdown-item' href='#'>
											Another action
										</a>
										<div className='dropdown-divider' />
										<a className='dropdown-item' href='#'>
											Something else here
										</a> */}
									</div>
								</li>
							</ul>
							<div className='buttons'>
								<Link to='/register'>
									<Button
										text='REGISTER'
										// onClick={() => {
										// 	alert('clicked');
										// }}
										className='ml-4  mr-2'
									/>
								</Link>
								<Link to='/login'>
									<Button text='LOGIN' isFilled={true} />
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
export default NavbarClass;
