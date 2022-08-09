import React, {Component} from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import './TabPanel.scss';
import Card from '../../../card/Card'
class TabPanel extends Component {
    render() {
        return (
            <div id='tabs2' className='container mt-5'>
                <Tabs
                    className='d-flex justify-content-between'
                    defaultActiveKey='home'
                    transition={false}
                    id='noanim-tab-example'>
                    <Tab eventKey='home' title='EN FINANCIACION (3)'>
                        <h3>EN FINANCIACION (3)</h3>
                        <div className='row mt-5 mb-4'>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey='profile' title='FINANCIADOS (190)'>
                        <h3>FINANCIADOS (190)</h3>
                        <div className='row mt-5 mb-4'>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey='contact' title='CERRADOS (73)'>
                        <h3>CERRADOS (73)</h3>
                        <div className='row mt-5 mb-4'>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey='blog' title='NO FINANCIADOS (1)'>
                        <h3>NO FINANCIADOS (1)</h3>
                        <div className='row mt-5 mb-4'>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                            <div className='col-md-4'>
                                <Card />
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default TabPanel;