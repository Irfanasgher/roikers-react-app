import React, { Component } from 'react';
import './System.scss';
class System extends Component {
	render() {
		return (
			<div id='system' className='row d-flex justify-content-center'>
				<div className='col-md-10 col-md-offset-1'>
					<h1>System Scoring</h1>
					<p className='mt-5'>Es el sistema de calificacion de prouectos financiados a traves de nuestra plataforma.</p>
					<p>
						Para la asignacion del scoring en los proyectos publicados en la plataforma Housers, se ha
						decidido recurrir a una empresa externa, especializada en analisis de riesgo inmobiliario y con
						capacidad para analizar riesgo inmobiliario tambien fuera de Espana u Europa:{' '}
						<span> Silva & Asociados.</span>
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet, aliquam donec at ipsum enim aliquam, dolor leo a in, lorem sed
						sagittis. Condimentum amet odio ut risus venenatis. Natoque massa magna et, porta interdum, vel
						ipsum mollis quis sit cras dapibus, quam sit sit lectus, morbi molestie. Porta morbi lobortis
						aliquam at ipsum sollicitudin. <span>Impedit adipiscing a porta quam et,</span> urna felis vel mauris et.
						Eget mollis maecenas torquent hendrerit orci fringilla, ipsum nascetur nec fuga. In quis eu
						viverra, sit augue quam ipsum eu metus, labore metus ultrices, imperdiet dis praesent elit
						pharetra. Quae at libero neque arcu, a ut in porttitor massa, malesuada qui leo arcu.
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet, aliquam donec at ipsum enim aliquam, dolor leo a in, lorem sed
						sagittis. Condimentum amet odio ut risus venenatis. Natoque massa magna et, porta interdum, vel
						ipsum mollis quis sit cras dapibus, quam sit sit lectus, morbi molestie. Porta morbi lobortis
						aliquam at ipsum sollicitudin. Impedit <span>adipiscing a porta quam et, urna felis vel</span> mauris et.
						Eget mollis maecenas torquent hendrerit orci fringilla, ipsum nascetur nec fuga. In quis eu
						viverra, sit augue quam ipsum eu metus, labore metus ultrices, imperdiet dis praesent elit
						pharetra. Quae at libero neque arcu, a ut in porttitor massa, malesuada qui leo arcu.
					</p>
					<p className='mt-4'>
						Lorem ipsum dolor sit amet, aliquam donec at ipsum enim aliquam, dolor leo a in, lorem sed
						sagittis. Condimentum amet odio ut risus venenatis. Natoque massa magna et, porta interdum, vel
						ipsum mollis <span>quis sit cras dapibus, quam sit</span> sit lectus, morbi molestie. Porta morbi lobortis
						aliquam at ipsum sollicitudin. Impedit adipiscing a porta quam et, urna felis vel mauris et.
						Eget mollis maecenas torquent hendrerit orci fringilla, ipsum nascetur nec fuga. In quis eu
						viverra, sit augue quam ipsum eu metus, labore metus ultrices, imperdiet dis praesent elit
						pharetra. Quae at libero neque arcu, a ut in porttitor <span>massa, malesuada qui leo arcu.</span>
					</p>
				</div>
			</div>
		);
	}
}

export default System;
