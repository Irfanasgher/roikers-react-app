import React, {Component} from 'react';
import './RelatedArticles.scss';
import Button from "../../../common/button/Button";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import SkueButton from "../../../common/button/SkueButton";
import {Link} from "react-router-dom";

class RelatedArticles extends Component {
     state = [
        {
            id: 1,
            image: 'jeremy-wong-292006 copia 2.png'
        },
         {
             id: 2,
             image: 'olu-eletu-38647 copia 3.png'
         },
         {
             id: 3,
             image: 'jeremy-wong-292006 copia 2.png'
         },
         {
             id: 4,
             image: 'Rectángulo 10 copia 5.png'
         },
         {
             id: 5,
             image: 'alvin-mahmudov-221416 copia 2.png'
         },
         {
             id: 6,
             image: 'Rectángulo 10 copia 5.png'
         },
         {
             id: 7,
             image: 'rawpixel-com-315188 copia 2.png'
         },
         {
             id: 8,
             image: 'rawpixel-com-274858 copia 3.png'
         },
         {
             id: 9,
             image: 'rawpixel-com-315188 copia 2.png'
         },
    ]
    render() {
         const mapImages = this.state.map((data, index) => {
             return(
                 <div className='col-md-4 mt-5'>
                     <img src={data.image} alt='' width='100%'/>
                     <div className='d-flex justify-content-end'>
                         <Link to={'/blog-details'}>
                            <SkueButton text={'LEAN CANVAS'} className={'p-2 pl-3 pr-3'} medium={true}/>
                         </Link>
                     </div>
                     <h4 className='mt-4'>INADEM Entrepreneur Weekly Conference</h4>
                     <div className='d-flex flex-row col-md-8 justify-content-between'>
                         <div className='d-flex'>
                             <i className='la la-calendar'></i><p>02.07.2020</p>
                         </div>
                         <div>
                             <p>|</p>
                         </div>
                         <div className='d-flex'>
                             <i className='la la-user'></i><p>Velasco frame</p>
                         </div>
                     </div>
                 </div>
             )
         })
        return (
            <div id='details-articles' className='mt-5 mb-5'>
                <h2 className='text-center mb-5'>We have many more articles</h2>
                <div className='row'>
                    {mapImages}
                    <div className='mt-5 move-to-right'>
                        <Link to={'/blog-details'}>
                        <Button text='Previous Publications' mediumWidth={true} withOutBackground1={true} className='mt-3 '>
                            <i className='ml-2 move'>
                                <TrendingFlatIcon />
                            </i>
                        </Button>
                        </Link>
                        <h4 className='mt-3'>What Is The Stunning Secret Just Behind of Spotify Success?</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default RelatedArticles;
