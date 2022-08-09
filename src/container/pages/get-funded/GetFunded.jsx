import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import Promotor from "../../../components/pages/get-funded/promotor/Promotor";
import WhyRoikersSection from "../../../components/pages/get-funded/why-roikers-section/WhyRoikersSection";
import AvailableFinancingSection
    from "../../../components/pages/get-funded/available-financing-section/AvailableFinancingSection";
import GetFundedCard from "../../../components/pages/get-funded/get-funded-card/GetFundedCard";
import Footer from "../../../components/common/footer/Footer";

class GetFunded extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true}/>
                <Header text='Get Funded' changeImage5={true} changePosition={true}/>
                <Promotor />
                <WhyRoikersSection />
                <AvailableFinancingSection />
                <GetFundedCard />
                <Footer />
            </div>
        );
    }
}

export default GetFunded;
