import React, {Component} from 'react';
import Navbar from '../../../components/common/navbar/Navbar';
import OppotunitiesBanner from "../../../components/pages/specific-opportunities/opportunities-banner/OpportunitiesBanner";
import TabPanel from "../../../components/pages/specific-opportunities/tab-panel/TabPanel";
import Footer from "../../../components/common/footer/Footer";
import CardSection from "../../../components/pages/specific-opportunities/card-section/CardSection";
class SpecificOpportunities extends Component {
    render() {
        return (
            <div>
                <Navbar backgroundWhite={true} logo={true}/>
                <OppotunitiesBanner />
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <TabPanel />
                        </div>
                        <div className='col-md-4'>
                            <CardSection />
                        </div>
                    </div>

                </div>
                <Footer />

            </div>
        );
    }
}

export default SpecificOpportunities;
