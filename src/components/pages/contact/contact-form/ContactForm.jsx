import React, {Component} from 'react';
import Button from '../../../common/button/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './ContactForm.scss';
class ContactForm extends Component {
    render() {
        return (
            <div id='cuentanow'>
                <div className='container'>
                    <h2><span>Cuentanow About</span><br/> your query</h2>
                    <div className='row m-md-5 p-md-5'>
                        <div className='col-md-6 text-left'>
                            <div className='move'>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className='fa fa-user'></i>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="What is your number?" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <div className='col-md-6 text-left m-md-0 mt-5'>
                            <div className='move'>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className='fa fa-envelope-o'></i>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="What is your email?" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <div className='col-md-6 text-left mt-5'>
                            <div className='move'>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className='fa fa-phone'></i>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="What is your phone?" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <div className='col-md-6 text-left mt-5'>
                            <div className='move mt-3'>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className='fa fa-refresh'></i>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            id="standard-select-currency-native"
                                            select
                                            SelectProps={{
                                                native: true,
                                            }}

                                        >
                                                <option>Pick a topic</option>
                                                <option>Roikers 1</option>
                                                <option>Roikers 2</option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        {/*<div className='col-md-6 text-left mt-5'>*/}
                        {/*    <div className='move'>*/}
                        {/*        <Grid container spacing={1} alignItems="flex-end">*/}
                        {/*            <Grid item>*/}
                        {/*                <i className='fa fa-refresh'></i>*/}
                        {/*            </Grid>*/}
                        {/*            <Grid item>*/}
                        {/*                <TextField id="input-with-icon-grid" label="Pick a topic" />*/}
                        {/*            </Grid>*/}
                        {/*        </Grid>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='col-md-6 text-left mt-5'>
                            <div className='move'>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className='fa fa-edit'></i>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" label="Describe your inquiry" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <Button text='SUBMIT' isFilled={true} className='mt-2'/>
                </div>
            </div>
        );
    }
}

export default ContactForm;