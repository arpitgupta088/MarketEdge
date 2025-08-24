import React from "react";
import "../../index.css";

function Hero() {
return (
    <div className="container">
        <div className="row p-5 mt-5 mb-5">
            <h1 className="fs-2 text-center">
                We pioneered the discount broking model in India. <br/>Now, we are breaking
                ground with our technology.
            </h1>
        </div>
        <div className="row p-5 mt-5 border-top text-muted fs-6">
            <div className="col-6 p-5">
                <p>
                    MarketEdge was founded in 2022 by a group of technocrats with a vision to revolutionize trading in India through cutting-edge technology and transparent pricing. Our mission is to empower traders and investors by providing innovative tools, seamless experiences, and reliable support.
                </p>
                <p>
                    Over the years, we have built a robust platform trusted by thousands of users. Our commitment to excellence drives us to continuously improve our services, ensuring that our clients stay ahead in the fast-evolving financial markets.
                </p>
                <p>
                    Join MarketEdge and experience the future of trading—where technology meets trust.
                </p>
            </div>
            <div className="col-6 p-5">
                <p>
                    <strong>Advanced Analytics:</strong> Access real-time market data, powerful charting tools, and AI-driven insights to make informed decisions.
                </p>
                <p>
                    <strong>Seamless Integration:</strong> Trade across multiple asset classes with a unified dashboard and intuitive interface.
                </p>
                <p>
                    <strong>Secure & Reliable:</strong> Your data and transactions are protected with industry-leading security protocols.
                </p>
                <p>
                    <strong>Dedicated Support:</strong> Our expert team is available to assist you at every step of your trading journey.
                </p>
                <p>
                    Whether you are a seasoned trader or just starting out, MarketEdge provides the resources and support you need to succeed. Discover a smarter way to trade—backed by technology, transparency, and trust.
                </p>
            </div>
        </div>
    </div>
);
}

export default Hero;
