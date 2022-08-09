import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import Footer from "../../../components/common/footer/Footer";
import TabPanel from "../../../components/pages/opportunities/tabPanel/TabPanel";
class Opportunities extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true} />
                <TabPanel />
                <Footer />
            </div>
        );
    }
}

export default Opportunities;
