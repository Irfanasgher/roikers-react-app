import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '../../../common/button/Button';

import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Slider from '@material-ui/core/Slider';

import './CardSection.scss';
const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export default function CardSection() {
    const classes = useStyles();

    return (
        <div id='card-panel'>
            <Card className={classes.card}>
                <CardContent className='mt-3'>
                    <h5><span>Status:</span> In Financing</h5>
                    <div className='d-flex justify-content-between flex-row'>
                        <div>
                            <div className='para mt-3'>
                                Financed
                            </div>
                            <h4>257.293 €</h4>
                        </div>
                        <div>
                            <div  className='para mt-3'>
                                Objectives
                            </div>
                            <h4>600.160 €</h4>
                        </div>
                    </div>

                    <Slider
                        defaultValue={42.8}
                        aria-labelledby='discrete-slider-always'
                        valueLabelDisplay='on'
                        disabled={true}
                        className='mt-4'
                    />
                    <div className='d-flex justify-content-between flex-row mt-3'>
                        <div className='investors'>
                            <PeopleOutlineIcon style={{ color: 'gray' }} />
                            <span>130 </span>Investors
                        </div>
                        <div className='investors'>
                            |
                        </div>

                        <div className='investors'>
                            <i className='fa fa-calendar' />
                            <span>10 </span>Remaining Days
                        </div>
                    </div>
                    <hr className='mt-4 hrStyling' />
                    <h3><span>Term:</span> 12 months</h3>
                    <div className='d-flex justify-content-between align-items-center flex-row mt-3 annual'>
                        <div  className='estimated'>
                            Annual Profitability
                            <br />
                            <span>11.5%</span>
                        </div>
                        <div className='straight-line'></div>
                        <div className='estimated'>
                            Annual Profitability
                            <br />
                            <span>12.5%</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center flex-row mt-3'>
                        <div className='invest'>
                            I want to invest
                        </div>

                        <div  className='invest'>
                            <input type='text' placeholder='120' /><span> €</span>
                        </div>
                    </div>
                    <Button text='INVEST NOW' className='mt-4' isFilled={true} fullWidth={true} size='16px' />
                </CardContent>
            </Card>
        </div>
    );
}
