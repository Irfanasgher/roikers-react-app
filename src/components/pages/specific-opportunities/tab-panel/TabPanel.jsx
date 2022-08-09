import React, {Component} from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import './TabPanel.scss';
import FlexContract from "./flex-contract/ FlexContract";
import GallerySlider from "./gallery-slider/GallerySlider";
import Location from "./location/Location";
import FinancialDocuments from "./financial-documents/ FinancialDocuments";
import StaticAnalysis from "../../info-roikers-scoring/static-analysis/StaticAnalysis";
class TabPanel extends Component {
    render() {
        return (
            <div id='tabs1' className='container'>
                <Tabs
                    className='d-flex justify-content-between'
                    defaultActiveKey='home'
                    transition={false}
                    id='noanim-tab-example'>
                    <Tab eventKey='home' title='DESCRIPTION'>
                        <FlexContract />
                        <GallerySlider />
                        <Location />
                        <GallerySlider />

                    </Tab>
                    <Tab eventKey='profile' title='FINANCIAL INFORMATION'>
                        <StaticAnalysis />

                    </Tab>
                    <Tab eventKey='contact' title='DOCUMENTATION'>
                        <FinancialDocuments />
                        <FinancialDocuments />
                        <FinancialDocuments />

                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabPanel;
