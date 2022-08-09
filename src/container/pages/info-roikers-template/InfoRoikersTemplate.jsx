import React, {Component} from 'react';
import Navbar from "../../../components/common/navbar/Navbar";
import Header from "../../../components/common/header/Header";
import ChooseOption from "../../../components/pages/info-roikers-scoring/choose-option/ChooseOption";
import System from "../../../components/pages/info-roikers-scoring/system/System";
import Footer from "../../../components/common/footer/Footer";

class InfoRoikersTemplate extends Component {
    render() {
        return (
            <div>
                <Navbar logo={true} backgroundWhite={true} />
                <Header text='Basic information' textdata='for the investor'/>
                <ChooseOption />
                <System />
                <Footer />
            </div>
        );
    }
}

export default InfoRoikersTemplate;
