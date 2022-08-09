import React, {Component} from 'react';
import Card from '../../../card/Card';
import './GetFundedCard.scss';
class GetFundedCard extends Component {
    render() {
        return (
            <div id='get-funded-card' className='mt-5 mb-5'>
                <h2>Success stories</h2>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                        <div className='col-md-4'>
                            <Card />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default GetFundedCard;