import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Fetch from "./Fetch.js"

// const BASE_URL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=12c8c447-8262-4721-82ca-f4fe863d05a5";

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);


//   })
//   .catch((error) => {
//     console.error(error);
//   });

function Market() {
  const [data, setData] = useState();
  useEffect(() => {


    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false&locale=en')

      .then(async (response) => {
        console.log(response.data);
        await setData(response.data);
      })

      .catch((error) => console.log(error));
  }, []);




  return (
    <div className="vh-100 mt-1  border border-light container " id="market">
      <div className="mb-1 row">
        <h2 className="mt-3">Popular Cryptocurrencies</h2>
        <p>Search popular coins and start trading</p>
      </div>

      <div className=" row container  ">
        {data.map((element) => 
        {
           return(
           
            // <Fetch element={element} key={element.id}  />
          <div className="col mx-1 my-2  w-20 bg-light rounded " key={element.id}>
            <img src={element.image} alt="" style={{height:"50px",width:"50px"}} />
            <h4>{element.symbol}</h4>
            <h5>{element.current_price}</h5>
            <p className={(element.price_change_percentage_24h>0)?"text-success":"text-danger"}>{element.price_change_percentage_24h}%</p>
          </div>
        )
        })}
      </div>

    </div>
  )
}
export default Market;