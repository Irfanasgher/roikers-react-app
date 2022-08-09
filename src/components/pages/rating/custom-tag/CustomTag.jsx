import React, {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './CustomTag.scss';
class CustomTag extends Component {
    render() {
        return (
            <div id='custom-tag' className='row d-flex justify-content-between mt-5 mb-5'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='col-md-10 col-md-offset-1'>
                    <Row>
                        <div className='col-md-3 col-md-offset-1'>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><h6>Application of rates <br /> to promoters:</h6></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"><h6>Application of the expenses <br /> to the promoters</h6></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className='col-md-9'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h4>Application of rates to promoters:</h4>
                                    <ul>
                                        <li>
                                        La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                    </ul>
                                    <h4 className='mt-3'>Application of the expenses to the promoters</h4>
                                    <ul>

                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h4>Application of the expenses to the promoters</h4>
                                    <ul>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                    </ul>
                                    <h4 className='mt-3'>Application of rates to promoters</h4>
                                    <ul>

                                        <li>
                                            La recepcion y estudio de la viabilidad del proyecto tendra una tarifa asociada que oscilara entre 0 y el 1% del valor del proyecto de financiacion. Roikers se reserva el derecho a decidir con cada proyecto la tarifa que aplicara.

                                        </li>
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}

export default CustomTag;