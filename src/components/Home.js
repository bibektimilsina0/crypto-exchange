import React from "react";
import bitcoin from "../image/bitcoin.jpg";
import market from "../image/market.jpg";
import blockchain from "../image/blockchain.jpg";
import currency from "../image/currency.png"
import Navbar from './Navbar.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Market from './Market.js';
function Home() {
   
    return (
        <div className="container  mw-100  " id="home">
            <Navbar/>
            <div className="row align-items-center  bg-light">
                <div className="col  align-content-around  ">
                    <div className="well col text-center m-4 align-content-around">
                        <h2 className="row justify-content-center d-4">Buy, trade, and hold 350+<br /> cryptocurrencies on Hicrypto</h2>
                        <p className="row justify-content-center d-4"  >Trade Bitcoin for free </p>
                        <div className="row ">
                            <button className="d-flex m-1 flex-row justify-content-center d-4 bg-warning border border-warnig rounded"  >
                                <i className="bi bi-person-fill px-2"></i>
                                <h5>Sign up with Email or Phone</h5>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="col container">
                    <div className="well col m-2">
                        <div className="row  justify-content-center">
                            <img src={bitcoin} alt="btc" className="image responsive p-2 rounded mt-3 " style={{ height: "190px", width: "190px" }} />
                            <img src={market} alt="market" className="image responsive  p-2" style={{ height: "200px", width: "200px" }} />
                        </div>
                        <div className="row justify-content-center">
                            <img src={blockchain} alt="btc" className="image responsive  p-2" style={{ height: "190px", width: "220px" }} />
                            <img src={currency} alt="market" className="image responsive  p-2" style={{ height: "200px", width: "200px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Portfolio />
            <Market />
           
        </div>
    )
}

export default Home;