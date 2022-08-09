import React, {Component} from 'react';
import './RatesPromoters.scss';
class RatesPromoters extends Component {
    render() {
        return (
            <div id='tarifos-promotores' className='row d-flex justify-content-center'>
                <div className='col-md-10 col-md-offset-1'>
                    <h3>2. Maximum rates and repeatable expenses for promoters</h3>
                    <div className='fijo mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Concept</li>
                            <div className='d-flex justify-content-between'>
                            <li className='mr-5'>Minimum (in euros or% *)</li>
                            <li>Minimum (in euros or% *)</li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Recepcion, estudio de viabilidad del proyecto</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>0%</h4></li>
                                <li><h4>1%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Publicacion del proyecto en la plataforma</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>5%</h4></li>
                                <li><h4>10%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Asesoramiento de los promotores en relacion a la plataforma de Roikers</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>0%</h4></li>
                                <li><h4>1%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Auditario anual del proyecto</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>0%</h4></li>
                                <li><h4>2%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Modelos de contratos necesarios para la participacion en los proyectos</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>0%</h4></li>
                                <li><h4>1%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <div className='fijo1 mt-4'>
                        <ul className='d-flex justify-content-between align-items-center'>
                            <li>Reclamaxion judicial y extrajudicial de los derechos de credito.</li>
                            <div className='d-flex justify-content-between li'>
                                <li className='mr-5'><h4>5%</h4></li>
                                <li><h4>20%</h4></li>
                            </div>
                        </ul>
                    </div>
                    <p className='mt-5'>
                        Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una :
                    </p>
                </div>
            </div>
        );
    }
}

export default RatesPromoters;