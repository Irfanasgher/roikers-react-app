import React, {Component} from 'react';
import './FinancialExpertsSection.scss';
class FinancialExpertsSection extends Component {
    render() {
        return (
            <div id='exports-financial' className='container'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <img src='Objeto inteligente vectorial.png' alt='' />
                    </div>
                    <div className='col-md-6'>
                        <h2>We are financial experts <span>who want your investment to achieve the</span> maximum possible return</h2>
                        <p>
                            “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinancialExpertsSection;