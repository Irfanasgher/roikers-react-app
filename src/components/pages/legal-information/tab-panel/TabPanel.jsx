import React, {Component} from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import './TabPanel.scss';
import Card from '../../../card/Card'
class TabPanel extends Component {
    render() {
        return (
            <div id='tabs3' className='mb-5'>
                <div className='container'>
                    <h1>
                        <span>Hello, choose the</span> option that <br className='d-md-block d-none'/>wish to review
                    </h1>
                <Tabs
                    className='d-flex justify-content-between'
                    defaultActiveKey='home'
                    transition={false}
                    id='noanim-tab-example'>
                    <Tab eventKey='home' title='Legal Information'>
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
                    <Tab eventKey='profile' title='Privacy Policy'>
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
                    <Tab eventKey='contact' title='Cookies Policy'>
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
                    <Tab eventKey='blog' title='Terms and Conditions'>
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
            </div>
        );
    }
}

export default TabPanel;