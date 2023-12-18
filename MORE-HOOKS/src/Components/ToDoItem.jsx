import React from 'react'


const ToDoItem = ({item:{data,isHidden},index,dispatch}) => {
  return (
    <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width:"100%",
        borderRadius: "1vw",
        padding: "0vw 0vw 0.5vw 0vw",
        marginTop: "1vw"
    }}>
        <h3 style={{filter: `${isHidden?"blur(4px)":"blur(0px)"}`}}>{isHidden?"This Content is Hidden":data}</h3>
        <button onClick={()=>{
            dispatch({type:"ChangeIsHidden",payload:index})
        }}>Toggle</button>
    </div>
  )
}

export default ToDoItem