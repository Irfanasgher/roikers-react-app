import React, { Component } from 'react';
import './FaqBanner.scss';
class FaqBanner extends Component {
	render() {
		// console.log(this.props.data)
		return (
			<div className='row d-flex justify-content-center align-items-start' id='main-page' >
				<div className='col-md-6 left-side  mt-5'>
					<h5>If you have any questions</h5>
					<h1>We give you the answers </h1>
					<div className='d-md-block d-none'>
						{this.props.data.map((data, index) =>{
							return(
								<a href={data.main_id1} key={data.id}>
								<div className='quiero mt-4'  >
									<img src={data.image} />
									<h3>{data.heading}</h3>
								</div>
								 </a>
							)
						})}
					</div>
				</div>
				<div className='col-md-6 mt-5 right-side'>
					<img src='Faqs1.png' width={400} height={500} />
				</div>
			</div>
		);
	}
}

export default FaqBanner;

{
	/* <div>
            <span class="MuiSlider-root MuiSlider-colorPrimary mt-5">
                <span class="MuiSlider-rail"></span>
                <span class="MuiSlider-track" style="left: 0%; width: 36%;"></span>
                <input type="hidden" value="36"/>
                <span class="MuiSlider-thumb MuiSlider-thumbColorPrimary PrivateValueLabel-open-112 PrivateValueLabel-thumb-111" tabindex="0" role="slider" data-index="0" aria-labelledby="discrete-slider-always" aria-orientation="horizontal" aria-valuemax="100" aria-valuemin="0" aria-valuenow="36" style="left: 36%;">
                    <span class="PrivateValueLabel-offset-113 MuiSlider-valueLabel">
                        <span class="PrivateValueLabel-circle-114">
                            <span class="PrivateValueLabel-label-115">
                                36%
                            </span>
                        </span>
                    </span>
                </span>
            </span>
        </div> */
}
