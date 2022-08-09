import React, {Component} from 'react';
import './LatestPost.scss';
import SkueButton from "../../../common/button/SkueButton";
import {Link} from "react-router-dom";
class LatestPost extends Component {
    state = [
        {
            id: 1,
            image: 'Elipse 1 copia 4.png'
        },
        {
            id: 2,
            image: 'gray-blazer-2494673_1920 copia 3.png'
        },
        {
            id: 3,
            image: 'Elipse 1 copia 4.png'
        },
        {
            id: 4,
            image: 'gray-blazer-2494673_1920 copia 3.png'
        }
    ]
    render() {
        const mapImages = this.state.map((data, index) => {
            return(
                <div className='row mt-5 ml-3'>
                    <div className='col-md-4'>
                        <img src={data.image} alt='' width='80px' height='80px'/>
                    </div>
                    <div className='col-md-8'>
                        <h5>INADEM Entrepreneur Weekly Conference</h5>
                        <Link to={'/blog'}>
                             <SkueButton text={'CANVAS'} className={'p-1 pl-3 pr-3'} small={true}/>
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div id='latest-post'>
                <h2>Latest posts</h2>
                {mapImages}

            </div>
        );
    }
}

export default LatestPost;
