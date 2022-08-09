import React, { Component } from 'react';
import './ChooseOption.scss';
import DoneIcon from "@material-ui/icons/Done";
class ChooseOption extends Component {
    state ={
        isStyle:false
    }
     changeStyle(){
        this.setState({
            isStyle: !this.state.isStyle
        })
    }
	render() {
		return (
			<div id='hola-elige'>
				<h1>
					<span>Hello, choose the</span> option that <br className='d-md-block d-none'/>wish to review
				</h1>
				<div className='row d-flex justify-content-between'>
					<div className='col-md-4 col-12'>
						<div className='quiero mt-4 d-flex justify-content-between align-items-center'>
							<h3>Risks and warning </h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
						</div>
					</div>
					<div className='col-md-4 col-12'>
						<div className='quiero mt-4 d-flex justify-content-between align-items-center'>
							<h3>
                                Type of opportunities and<br /> calculation of its profitability
							</h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
						</div>
					</div>
					<div className='col-md-4 col-12'>
						<div className='quiero mt-4 d-flex justify-content-between align-items-center'>
							<h3>
                                Basic run from Roikers
							</h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
						</div>
					</div>
                    <div className='col-md-4 col-12'>
                        <div className='quiero mt-4 d-flex justify-content-between align-items-center'>
                            <h3>Cessation of services</h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <div className='quiero mt-4 d-flex justify-content-between align-items-center'>
                            <h3>Scoring system  </h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <div className='quiero mt-4 d-flex justify-content-between align-items-center'>
                            <h3>Cessation of services </h3>
                            <div className={` ${this.state.isStyle ? 'circle1': 'circle'} 'circle d-flex justify-content-center align-items-center'`} onClick={() => {this.changeStyle()}}>
                                <DoneIcon className='icon' />
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		);
	}
}

export default ChooseOption;
