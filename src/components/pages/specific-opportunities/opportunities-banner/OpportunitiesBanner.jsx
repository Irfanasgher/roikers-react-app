import React, {Component} from 'react';
import './OpportunitiesBanner.scss';

class OpportunitiesBanner extends Component {
    render() {
        return (
            <div id='main'>
                <div className='mantadios d-flex'>
                    <img
                        src='sweden.png'
                        width='45px'
                        height='45px'
                    />
                    <div className='heading'>
                        <h4>100 montaditos</h4>
                        <p>Construction</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default OpportunitiesBanner;
