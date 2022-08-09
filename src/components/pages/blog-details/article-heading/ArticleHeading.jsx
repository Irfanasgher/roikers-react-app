import React, {Component} from 'react';
import './ArticleHeading.scss';
class ArticleHeading extends Component {
    render() {
        return (
            <div id='forces'>
                <h2>What forces make our demands be reduced considerably?</h2>
                <div className='d-flex flex-row col-md-4 justify-content-between'>
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
        );
    }
}

export default ArticleHeading;
