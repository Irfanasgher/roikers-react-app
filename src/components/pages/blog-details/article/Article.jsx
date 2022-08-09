import React, {Component} from 'react';
import './Article.scss';
import SkueButton from "../../../common/button/SkueButton";
import {Link} from "react-router-dom";

class Article extends Component {
    render() {
        return (
            <div id='detail-investment' className='mb-5 pb-5'>
                <img src='GettyImages-994519216.png' />
                <div className='d-flex justify-content-end'>
                    <Link to={'/blog-details'}>
                    <SkueButton text={'Investment'} className={'p-3 pl-5 pr-5'}/>
                    </Link>
                </div>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <p className='mt-4'>
                    Font Awesome is well, awesome, but our data shows that people actually like line icons even more1. Since Icons8 is all about making people happy, we made Line Awesome as a free alternative to Font Awesome 5.11.2.
                    Line Awesome consists of ~1380 flat line icons that offer complete coverage of the main Font Awesome icon set. This icon-font is based off of the Icons8 Windows 10 style, which consists of over 4,000 icons, so be sure to check that out if you need more specific icons.
                </p>
                <div className='mt-5'>
                    <div className='d-md-block d-none'>
                        <div className='d-flex'>
                            <i className='la la-tag tag'></i>
                            <ul>
                                <li>iOs</li>
                                <li>Apps</li>
                                <li>Movil</li>
                                <li>iOs</li>
                                <li>Apps</li>
                                <li>Movil</li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex justify-content-md-end justify-content-center align-items-center move-top'>
                        <p>Share in</p>
                        <div className='icon'>
                            <a href={'https://www.facebook.com/'}>
                                <i className='fa fa-facebook icon1' />
                            </a>
                            <a href={'https://twitter.com/?lang=en'}>
                                <i className='fa fa-twitter icon1' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Article;
