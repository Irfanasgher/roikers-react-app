import React, {Component} from 'react';
import './ WhatIsRoikers.scss';
class WhatIsRoikers extends Component {
    render() {
        return (
            <div id='what-is-roikers' className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='circle d-flex justify-content-center align-items-center'>
                            <img src='logo-02.png' alt='' />
                        </div>
                    </div>
                    <div className='col-md-8 text-left'>
                        <h2>What is Roikers?</h2>
                        <p>
                            “Hidden” object properties.<span> If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property</span> does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol.
                        </p>
                    </div>
                    <div className='mt-5'>
                        <p>
                            “Hidden” object properties.<span> If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property</span> does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol.
                        </p>
                        <p>
                            “Hidden” object properties.<span> If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property</span> does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatIsRoikers;