import React, {Component} from 'react';
import Navbar from "../../../components/common/navbar/Navbar";
import Header from "../../../components/common/header/Header";
import Footer from "../../../components/common/footer/Footer";
import TabsComponent from "../../../components/pages/rating/tabs/Tabs";
import CustomTag from "../../../components/pages/rating/custom-tag/CustomTag";

class Tariforio extends Component {
    render() {
        return (
            <div>
                <Navbar logo={true} backgroundWhite={true} />
                <Header text='Informative brochure of' textdata='maximum rates and ' textpara='chargeable expenses' changeImage={true}/>
                <TabsComponent />
                <Footer />
            </div>
        );
    }
}

export default Tariforio;
