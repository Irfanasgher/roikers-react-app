import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Tabs.scss';
import System from '../../../../components/pages/info-roikers-scoring/system/System';
import StaticAnalysis from '../../info-roikers-scoring/static-analysis/StaticAnalysis';
import CustomTag from '../custom-tag/CustomTag';
import Identification from '../identification/Identification';
import RatesPromoters from '../rates-promoters/RatesPromoters';
class TabsComponent extends Component {
	render() {
		return (
			<div id='tabs' className='row d-flex justify-content-center'>
				<Tabs
					className='col-md-10 col-md-offset-1 d-flex justify-content-between'
					defaultActiveKey='home'
					transition={false}
					id='noanim-tab-example'>
					<Tab eventKey='home' title='Identification of the participatory financing platform'>
						<Identification />
						<RatesPromoters />
						<CustomTag />
						{/*<RatesPromoters />*/}
						{/*<CustomTag />*/}
					</Tab>
					<Tab eventKey='profile' title='Maximum rates and repeatable expenses for promoters'>
						<System />
						<RatesPromoters />
						<CustomTag />
						{/*<RatesPromoters />*/}
						{/*<CustomTag />*/}
					</Tab>
					<Tab eventKey='contact' title='Maximum rates and repeatable expenses for investors'>
						<StaticAnalysis />
						<RatesPromoters />
						<CustomTag />
						{/*<RatesPromoters />*/}
						{/*<CustomTag />*/}
					</Tab>
				</Tabs>
			</div>
		);
	}
}

export default TabsComponent;
