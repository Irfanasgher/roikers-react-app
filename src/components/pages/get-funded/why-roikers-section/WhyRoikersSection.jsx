import React, {Component} from 'react';
import './WhyRoikersSection.scss';
class WhyRoikersSection extends Component {
    state = [
        {
            id: 1,
            image: 'Elipse 881.png',
            heading: 'Loyalty',
            para:'Involve your current clients of your success and reward them for their help'
        },
        {
            id: 2,
            image: 'Objeto inteligente vectorial1.png',
            heading: 'Visibility',
            para:'Reach a multitude of people in different locations and get new customers'
        },
        {
            id: 3,
            image: 'Objeto inteligente vectorial222.png',
            heading: 'Increase',
            para:'Expand your business and make it to the next level. Allow more people to use your services'
        },
        {
            id: 4,
            image: 'Objeto inteligente vectorial3.png',
            heading: 'Ease',
            para:'Only worry about your business and leave everything else in the hands of experts.'
        }
    ]
    render() {
        const mapData = this.state.map((data, index) =>{
            return(
                    <div className='col-md-3'>
                        <div className='bg-white1 pt-5 pb-5 text-center'>
                            <img src={data.image} alt='' />
                            <h3 className='mt-3'>{data.heading}</h3>
                            <p>{data.para}</p>
                        </div>
                    </div>
            )
        })
        return (
            <div id='why-roikers' className='mt-5 p-5'>
                <h2><span>Why finance</span> your product with Roikers?</h2>
                <div className='row mt-5'>
                    {mapData}
                </div>
            </div>
        );
    }
}

export default WhyRoikersSection;