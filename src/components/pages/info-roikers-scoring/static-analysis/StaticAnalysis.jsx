import React, { Component } from 'react';
import './StaticAnalysis.scss';
import DoneIcon from '@material-ui/icons/Done';
class StaticAnalysis extends Component {
	render() {
		return (
			<div id='analisis' className='row d-flex justify-content-center mt-5'>
				<div className='col-md-10 col-md-offset-1'>
					<h1>1. Static analysis:</h1>
					<p>
						Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
						decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario :
					</p>
					<ul className='mt-5'>
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
                    <h6 className='mt-3'>
                        Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
                        decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario :
                    </h6>
				</div>
			</div>
		);
	}
}

export default StaticAnalysis;
