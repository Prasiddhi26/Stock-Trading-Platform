import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 '>
                    <img src="media/images/largestBroker.svg"/>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock Broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and inversting in:
                    </p>
                    <div className='row mt-5 mb-3'>
                        <div className='col-6'>
                            <ul>
                                 <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                 <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" style={{width:"90%"}} className='mb-5'/>
                </div>
            </div>
        </div>
     );
}

export default Awards;
