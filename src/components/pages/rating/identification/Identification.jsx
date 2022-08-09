import React, {Component} from 'react';
import './Identification.scss';
import DoneIcon from "@material-ui/icons/Done";
class Identification extends Component {
    render() {
        return (
            <div id='identification' className='row d-flex justify-content-center mt-5'>
                <div className='col-md-10 col-md-offset-1'>
                    <h3>1. Identification of the participatory financing platform</h3>
                    <p>
                        Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario. Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario. Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario. Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario.
                    </p>
                    <h5 className='mt-5'>Datos de Roikers:</h5>
                    <ul className='mt-3'>
                        <li>
                            <DoneIcon className='icon' /> Experiencia del promotor
                        </li>
                        <li>
                            <DoneIcon className='icon' /> Experiencia del promotor
                        </li>
                        <li>
                            <DoneIcon className='icon' /> Experiencia del promotor
                        </li>
                        <li>
                            <DoneIcon className='icon' /> Experiencia del promotor
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Identification;