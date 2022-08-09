import React, { Component } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import './Features.scss';
class Features extends Component {
	render() {
		return (
			<div id='feature'>
				<div className='d-flex align-items-center flex-row row justify-content-between'>
					<img
						src='features1.png'
						width='50%'
						className='ml-md-1 ml-none col-md-6 col-12 image d-md-block d-none'
					/>
					<div className='feature col-md-5 col-12'>
						<h1>
							Features <span>section</span>
						</h1>
						<ul>
							<li>
								<DoneIcon className='icon' />Once all studies have been done
							</li>
							<li>
								<DoneIcon className='icon' />Once all studies have been done
							</li>
							<li>
								<DoneIcon className='icon' />Once all studies have been doneo
							</li>
							<li>
								<DoneIcon className='icon' />Once all studies have been done
							</li>
							<li>
								<DoneIcon className='icon' />Once all studies have been done
							</li>
						</ul>
					</div>
					<img src='mobileBase1.png' width='50%' className='col-10 image1 d-block d-md-none p-none' />
				</div>
			</div>
		);
	}
}
export default Features;
