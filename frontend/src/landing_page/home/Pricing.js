import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3 fs-2" style={{color:"blue"}}>Undefeatable Pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Check Pricing
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
            <div className="row text-center">
                <div className="col p-2 border"> 
                    <h1 className="mb-3">₹0</h1>
                    <p>Free equity delivery and <br/>direct mutual funds</p>
                </div>
                <div className="col p-2 border">
                    <h1 className="mb-3">₹21</h1>
                    <p>Intraday Trading and <br/> F&O</p>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
