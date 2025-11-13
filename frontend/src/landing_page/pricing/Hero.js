import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-5 ">Charges</h1>
      <h3 className="text-muted">List of all charges and taxes</h3>
      <div className="row">
        <div className="col-4">
            <img src="media\images\pricing0.svg" style={{width:"250px"}}/>
            <h2>Free equity delivery</h2>
            <p className="text-muted fs-6 mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
        </div>
        <div className="col-4">
             <img src="media\images\intradayTrades.svg" style={{width:"250px"}}/>
             <h2>Intraday and F&O trades</h2>
            <p className="text-muted fs-6 mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
            <img src="media\images\pricingMF.svg" style={{width:"250px"}}/>
            <h2>Free direct MF</h2>
            <p className="text-muted fs-6 mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
