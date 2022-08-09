import React, {Component} from 'react';

class Location extends Component {
    render() {
        return (
            <div id='location' className='mt-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2091332238806!2d74.32028451463087!3d31.518415554393293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190487cc9571bb%3A0xaf85a5e061138579!2sMuslim%20Town%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1580378696126!5m2!1sen!2s"
                    width="100%" height="400" frameBorder="0" style={{borderRadius: '20px',  border: '0'}} allowFullScreen=""></iframe>
            </div>
        );
    }
}

export default Location;