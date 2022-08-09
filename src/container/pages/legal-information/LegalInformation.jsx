import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Header from "../../../components/common/header/Header";
import TabPanel from "../../../components/pages/legal-information/tab-panel/TabPanel";
import Footer from "../../../components/common/footer/Footer";
class LegalInformation extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true}/>
                <Header text='Basic information' textdata='for the investor' changeImage1={true}/>
                <TabPanel />
                <Footer />
            </div>
        );
    }
}

export default LegalInformation;
