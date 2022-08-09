import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AvailableFinancingSection.scss';
class AvailableFinancingSection extends Component {
    state = [
        {
            id: 1,
            image: 'Objeto inteligente vectorial4.png',
            heading: 'Amploacopmes de capital',
            para: 'Involve your community and transform your customers into fans'
        },
        {
            id: 2,
            image: 'Objeto inteligente vectorial7.png',
            heading: 'Participatory loans',
            para: 'Involve your community and transform your customers into fans'
        },
        {
            id: 3,
            image: 'Objeto inteligente vectorial6.png',
            heading: 'Fixed interest loans',
            para: 'Involve your community and transform your customers into fans'
        }
    ]
    render() {
        const mapData = this.state.map((data, index) =>{
            return(
                <div className='col-md-4'>
                    <div className='bg-white1 pt-5 pb-5 text-center'>
                        <img src={data.image} alt='' />
                        <h3 className='mt-3'>{data.heading}</h3>
                        <p>{data.para}</p>
                    </div>
                </div>
            )
        })
        return (
            <div id='available-financing-section' className='mt-5 p-5'>
                <h2>Types of financing available</h2>
                <div className='row mt-5'>
                    {mapData}
                </div>
                <h5>Do you still have any doubt? <span>Consult our <Link to='/faq'>FAQ</Link> or write us so we can solve them for you.</span></h5>
            </div>
        );
    }
}

export default AvailableFinancingSection;