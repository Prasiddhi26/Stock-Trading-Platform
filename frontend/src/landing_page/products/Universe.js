import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-muted">
      <div className="row text-center ">
        <h3>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
        <h4 className="mt-5 mb-3">The Zerodha Universe</h4>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ width: "180px" }}
          />
          <p className="text-small mt-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="\media\images\sensibullLogo.svg"
            style={{ width: "160px" }}
          />
          <p className="text-small mt-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-small mt-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\dittoLogo.png" style={{ width: "100px" }} />
          <p className="text-small mt-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\streakLogo.png" style={{ width: "150px" }} />
          <p className="text-small mt-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\smallcaseLogo.png" />
          <p className="text-small mt-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button
        className="p-2 btn btn-primary fs-5 mb-5 center-btn"
        style={{ width: "15%", margin: "0 auto" }}
      >
        Sign Up for free
      </button>
      </div>

      
    </div>
  );
}

export default Universe;
