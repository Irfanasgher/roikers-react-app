import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import Article from "../../../components/pages/blog/article/Article";
import FinancialExpertsSection from "../../../components/pages/about/financial-experts-section/FinancialExpertsSection";
import WhatIsRoikers from "../../../components/pages/about/what-is-roikers/ WhatIsRoikers";
import ManifestStep from "../../../components/pages/about/manifest-step/ManifestStep";
import Footer from "../../../components/common/footer/Footer";
class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true}/>
                <Header text='About Us' changeImage3={true} changePosition={true}/>
                <FinancialExpertsSection />
                <WhatIsRoikers />
                <ManifestStep />
                <Footer />

            </div>
        );
    }
}

export default AboutUs;
