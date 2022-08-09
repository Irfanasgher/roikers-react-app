import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Banner from "../../../components/pages/home/banner/Banner";
import InvestorInformationSection from "../../../components/pages/home/investor-information-section/InvestorInformationSection";
import OpportunityCardSection from "../../../components/pages/home/opportunity-card-section/OpportunityCardSection";
import RateCalculationSection from "../../../components/pages/home/rate-calculation-section/RateCalculationSection";
import HowItWorks from "../../../components/pages/home/how-it-works/HowItWorks";
import Features from "../../../components/pages/home/features/Features";
import AboutUs from "../../../components/pages/home/about-us/AboutUs";
import Footer from "../../../components/common/footer/Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <InvestorInformationSection />
                <OpportunityCardSection />
                <RateCalculationSection />
                <HowItWorks />
                <Features />
                <AboutUs />
                <Footer />
            </div>
        );
    }
}

export default Home;
