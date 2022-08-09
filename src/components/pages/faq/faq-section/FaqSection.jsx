import React, {Component} from 'react';
import Accordion from "../accordion/Accordion";
import './FaqSection.scss';

class FaqSection extends Component {
    render() {
        return (
            <div id='consultas' className='mt-5 mb-5'>
                <h1>Frequently asked questions</h1>
                <Accordion data={this.props.data}/>
            </div>
        );
    }
}

export default FaqSection;