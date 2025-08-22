import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 ">
          <h1 className='fs-2 mb-5' style={{ color: "blue" }}>Apka Vishwaas</h1>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1+ crore customers trust MarkeEdge with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="fs-4">No Spam or Gimmicks</h3>
          <p className="text-muted">
            We don't spam you with calls or messages. We believe in providing a
            seamless experience without unnecessary interruptions.
          </p>
          <h3 className="fs-4">24/7 Customer Support</h3>
          <p className="text-muted">
            Our dedicated support team is available round the clock to assist
            you with any queries or issues you may have.
          </p>
          <h3 className="fs-4">Empowering Your Financial Journey</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "85%" }}
          />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our Products
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#"  style={{ textDecoration: "none" }}>
              Try kite demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
