

function Fetch({element}){
 return(
    <div className="row container ">
         <div className="col mx-1 my-2  w-20 bg-light rounded " key={element.id}>
            <img src={element.image} alt="" style={{height:"50px",width:"50px"}} />
            <h4>{element.symbol}</h4>
            <h5>{element.current_price}</h5>
            <p className={(element.price_change_percentage_24h>0)?"text-success":"text-danger"}>{element.price_change_percentage_24h}%</p>
          </div>
    </div>
 )
}

export default Fetch;