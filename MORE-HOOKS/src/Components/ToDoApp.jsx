import React, { useReducer, useRef } from "react";
import ToDoItem from "./ToDoItem";

const initialState = [];
const todoReducer = (state, action) => {
  if (action.type == "AddItem" && action.payload != "") {
    return [
      ...state,
      {
        data: action.payload,
        isHidden: false,
      },
    ];
  }
  if (action.type == "ChangeIsHidden") {
    return state.map((e, i) => {
      return i == action.payload ? { ...e, isHidden: !e.isHidden } : e;
    });
  }
  return state;
};

const ToDoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef();

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            dispatch({ type: "AddItem", payload: e.target.value });
            e.target.value = "";
          }
        }}
      />

      {todo.map((e, i) => {
        return <ToDoItem item={e} index={i} dispatch={dispatch} />;
      })}

      <button
        style={{ display: "block",margin: "1vw auto"}}
        onClick={() => {
          inputRef.current.focus();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        GO BACK TO TOP
      </button>
    </div>
  );
};

export default ToDoApp;
