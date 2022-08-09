import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../container/pages/home/Home';
import Login from '../components/auth/login/Login';
import Register from '../components/auth/register/Register';
import Recover from '../components/auth/recover/Recover';
import InfoRoikersTemplate from '../container/pages/info-roikers-template/InfoRoikersTemplate';
import InfoRoikers from '../container/pages/info-roikers-scoring/InfoRoikers';
import Faqs from '../container/pages/faq/Faqs';
import Rates from '../container/pages/rating/Rates';
import SpecificOpportunities from '../container/pages/specific-opportunities/SpecificOpportunities';
import Opportunities from '../container/pages/opportunities/Opportunities';
import LegalInformation from '../container/pages/legal-information/LegalInformation';
import Blog from '../container/pages/blog/Blog';
import AboutUs from '../container/pages/about/AboutUs';
import Contact from '../container/pages/contact/Contact';
import BlogDetails from '../container/pages/blog-details/BlogDetails';
import ScrollToTop from './scroll-to-top/ScrollToTop';
import GetFunded from '../container/pages/get-funded/GetFunded';

class Index extends Component {
	render() {
		return (
			<div>
				<ScrollToTop>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/recover' component={Recover} />
						<Route exact path='/info-roikers-template' component={InfoRoikersTemplate} />
						<Route exact path='/info-roikers-scoring' component={InfoRoikers} />
						<Route exact path='/faq' component={Faqs} />
						<Route exact path='/rating' component={Rates} />
						<Route exact path='/specific-opportunities' component={SpecificOpportunities} />
						<Route exact path='/opportunities' component={Opportunities} />
						<Route exact path='/legal-information' component={LegalInformation} />
						<Route exact path='/blog' component={Blog} />
						<Route exact path='/blog-details' component={BlogDetails} />
						<Route exact path='/about' component={AboutUs} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/get-funded' component={GetFunded} />
					</Switch>
				</ScrollToTop>
			</div>
		);
	}
}

export default Index;
