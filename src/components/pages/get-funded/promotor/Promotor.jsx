import React, {Component} from 'react';
import './Promotor.scss';
import MainHeading from "../../../common/main-heading/MainHeading";
class Promotor extends Component {
    render() {
        return (
            <div id='promotor' className='mb-5'>
                <div className='container'>
                    <h2 className='mt-5'><span>Do you want to be</span> a Roikers promoter?</h2>
                    <p>“Hidden” object properties. If we want to add a property into an object that “belongs” to another script</p>
                    <h4>promotor@roikers.com</h4>
                    <div className='text-left mt-5'>
                        <h5>We need:</h5>
                        <ul>
                            <li><span>-</span> Your full name.</li>
                            <li><span>-</span> Email and telephone.</li>
                            <li><span>-</span> Curriculum Vitae.</li>
                            <li><span>-</span> Name of the organization, CIF number of employees, main activity of the company and volume of assets.</li>
                            <li><span>-</span> The product you want to finance and growth expectations.</li>
                        </ul>
                    </div>
                    <div className='text-center mt-5'>
                        <p>This information will be evaluated by Roikers experts and we will<br/> contact you to finalize the details.</p>
                        <h6>Next, your product will be published in Roikers.</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotor;
