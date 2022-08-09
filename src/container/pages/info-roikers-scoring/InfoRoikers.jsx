import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import ChooseOption from "../../../components/pages/info-roikers-scoring/choose-option/ChooseOption";
import System from "../../../components/pages/info-roikers-scoring/system/System";
import StaticAnalysis from "../../../components/pages/info-roikers-scoring/static-analysis/StaticAnalysis";
import DynamicAnalysis from "../../../components/pages/info-roikers-scoring/dynamic-analysis/DynamicAnalysis";
import Scoring from "../../../components/pages/info-roikers-scoring/scoring/Scoring";
import Footer from "../../../components/common/footer/Footer";
class InfoRoikers extends Component {
    render() {
        return (
            <div>
                <Navbar logo={true} backgroundWhite={true} />
                <Header text='Basic information' textdata='for the investor'/>
                <ChooseOption />
                <System />
                <StaticAnalysis />
                <DynamicAnalysis />
                <Scoring />
                <Footer />
            </div>
        );
    }
}

export default InfoRoikers;
