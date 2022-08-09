import React, { Component } from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import FaqsMainPage from '../../../components/pages/faq/faq-banner/FaqBanner';
import FaqSection from '../../../components/pages/faq/faq-section/FaqSection';
import Footer from '../../../components/common/footer/Footer';
import AccordionData from './AccordionData';
class Faqs extends Component {
	render() {
		return (
			<div>
				<Navbar backgroundWhite={true} logo={true} />
				<FaqsMainPage data={AccordionData}/>
				<FaqSection data={AccordionData}/>
				<Footer />
			</div>
		);
	}
}

export default Faqs;
