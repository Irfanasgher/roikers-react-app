import React, {Component} from 'react';
import Slider from 'react-slick';
import Image from "react-bootstrap/Image";
import './GallerySlider.scss';
class GallerySlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            arrow: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div id='gallery' className='mt-5'>
                <h5 className='mb-4'>IMAGE GALLERY</h5>
                <Slider {...settings} >
                    <div>
                        <Image src='GettyImages-1141910161.png'  className='mb-4 images' />
                    </div>
                    <div>
                        <Image
                            src='GettyImages-1088862160.jpg'
                            className='mb-4 images'
                        />
                    </div>
                    <div>
                        <Image src='GettyImages-1141910161.png' className='mb-4 images' />
                    </div>
                    <div>
                        <Image
                            src='login.jpg'
                            className='mb-4 images'
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default GallerySlider;