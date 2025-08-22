import React from 'react';

function Awards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Desh ka sabse bada stock broker!!</h1>
                    <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt='Press Logos' style={{width:"90%"}}></img> 
                </div>
            </div>
        </div>
    );
}

export default Awards;