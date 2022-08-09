import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './InvestorInformationSection.scss';
class InvestorInformationSection extends Component {
	render() {
		return (
			<div id='cnmv'>
				<Container>
					<Media className='d-flex justify-content-between align-items-center'>
						<Image
							width={300}
							height={150}
							className='mr-3 image'
							src='CNMV1.png'
							alt='Generic placeholder'
						/>
						<Media.Body>
							<p className='para'>
								We are a participatory financing platform authorized by the CNMV through license number
								20,<br className='d-md-block d-none' />
								with 115,637 users and a cumulative investment of € 106,311,240.<br className='d-md-block d-none' />{' '}
								Remember that we are not an investment services company or a credit institution. Please
								read the <br className='d-block d-md-none' />
								<Link to='legal-information'>basic information for the investor</Link>
							</p>
						</Media.Body>
					</Media>
				</Container>
			</div>
		);
	}
}
export default InvestorInformationSection;
