import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5 mb-5">
            <h1 className="text-center mt-3">
               People
            </h1>
        </div>
        <div className="row p-5 fs-6" style={{ color: "#212529" }}>
            <div className="col-6 p-5">
                <img src='media/images/arpit.jpg' style={{borderRadius:"100%", width:"50%", height:"50%", marginLeft:"3.5rem"}}/>
                <h4 className='mt-5' style={{marginLeft:"7rem"}}>Arpit Gupta</h4>
                <h6 style={{marginLeft:"7rem"}}>Founder, CEO</h6>
            </div>
            <div className="col-6 p-4">
                <p>
                Arpit Gupta is the visionary founder and CEO of MarketEdge, bringing over a decade of experience in financial technology and trading platforms. With a background in software engineering and a passion for democratizing access to financial markets, Arpit has been instrumental in shaping MarketEdge's innovative approach to discount broking in India.
                </p>
                <p>
                Under his leadership, MarketEdge has grown to become one of India's leading brokerage firms, known for its cutting-edge technology, transparent pricing, and customer-centric services. Arpit's commitment to excellence and innovation continues to drive the company's mission to empower traders and investors across the country.
                </p>
                <p>
                Beyond his professional achievements, Arpit is an avid advocate for financial literacy and inclusion, frequently engaging in initiatives that promote better understanding of investment strategies among retail investors.
                </p>
                <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
            </div>
        </div>
    </div>
     );
}

export default Team;