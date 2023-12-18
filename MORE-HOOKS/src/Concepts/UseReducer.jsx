import React, { useReducer } from 'react'

const reducer = (state ,action)=>{
    const {type} = action
    if (type == "increase") {
        return state + 1
    } else {
        return state - 1
    }

}
const initValue = 0

const UseReducer = () => {
    const [count,dispatch] = useReducer(reducer,initValue)
  return (
    <div>
        <h1>U S E  R E D U C E R</h1>
        <button onClick={()=>dispatch({type:"increase"})}>+</button>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"decrease"})}>-</button>
    </div>
  )
}

export default UseReducer