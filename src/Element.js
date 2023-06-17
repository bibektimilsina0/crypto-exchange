import React, { useState } from "react";
import { useReducer } from "react";
const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return{  count:state.count+1,showtext:state.showtext}
      case "toggleShowText":
        return{  count:state.count+1,showtext:!state.showtext}
     default:
      return state;
  }

};


function Element()
{ const[increase,setIncrease]=useState(0);
  const [state, dispatch]=useReducer(reducer,{count:0, showtext:true})
  const add=()=>{
    setIncrease(increase+1);
  };  

    return  ( <>
         
         <p>my name is bibek timilsina</p>
         <p>{state.count}</p>
        <button onClick={()=>{
          dispatch({type:"INCREMENT"});
          dispatch({type:"toggleShowText"});
        }}>
          click me!
        </button>
        <p>
        {state.showtext&&<p>this is a text</p>}
        </p>
        <button onClick={add}>
          click me!
        </button>
        <p>{increase}</p>

         </>
    )
}
export default Element;