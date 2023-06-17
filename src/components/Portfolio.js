import React from "react";
import portflo from "../image/portfolio-section.webp";
import id from "../image/identity.png";
import fund from "../image/fund.jpg";
import trading from "../image/trading.jpg"

function Portfolio() {
    return (
        <div className="container vh-100 border border-red " id=" portfolio ">
            <div className="row m-4 ">
                <div className="col mx-4 ">
                    <div className="col text-start">
                        <h2>Build your crypto portfolio</h2>
                        <p className="p-0 text-muted">Start your first trade with these easy steps.</p>
                    </div>
                    <div className=" col d-flex flex-row justify-content-center text-start">
                        <div className="m-4" >
                            <img className="rounded " src={id} alt="i" style={{width:"50px", height:"50px"}} />
                        </div>
                        <div className="">
                            <h4>Verify your identity</h4>
                            <p className="text-muted">Complete the identity verification process to secure your account and transactions</p>
                        </div>
                    </div>
                    <div className=" col d-flex flex-row justify-content-center text-start">
                        <div className="m-4" >
                        <img  className="rounded " src={fund} alt="i" style={{width:"50px", height:"50px"}} />
                        </div>
                        <div className="">
                            <h4>Fund your account</h4>
                            <p className="text-muted">Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.</p>
                        </div>
                    </div>
                    <div className=" col d-flex flex-row justify-content-center text-start">
                        <div className="m-4" >
                            <img className="rounded " src={trading} alt="i" style={{width:"50px", height:"50px"}} />
                        </div>
                        <div className="">
                            <h4>Start trading</h4>
                            <p className="text-muted">You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</p>
                        </div>
                    </div>
                    <div className="col text-start">
                        <button className="bg-warning rounded border border-warnig p-2">Get started</button>
                    </div>

                </div>
                <div className="col container">
                    <div className="row justify-content-center">
                        <img src={portflo} alt="portfolio" className="image-responsive" style={{height:"80vh",width:"60%"}} />
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Portfolio;