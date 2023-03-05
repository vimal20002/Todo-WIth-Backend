import React, { useState, useEffect } from "react";
import "../App.css";
import Done from "./images/check.png";
import Bin from "./images/bin.png";
import { useDispatch } from "react-redux";
import { changeSt } from "../redux/features/userSlice";
import { useHistory } from "react-router-dom";
const TodoItem = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"))
  const [formValue, setformValue] = useState({
    email: "",
    title: ""
  });
  useEffect(() => {
    setformValue({ ...formValue, email: user.email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email])
  const done = (e) => {
    setformValue({ ...formValue, title: e.title })
    document.getElementById(e.title).classList.add("donee")
    if (formValue.title) {
      dispatch(changeSt({ formValue, history }))
    }
  }
  return (
    <div className={props.cls}>
      <div className={`card ${props.todo.status === 'c' ? "donee" : ''}`} id={props.todo.title} >
        <h3 className="sno">{props.sno}.</h3>
        <p className="title">{props.todo.title} </p>
        <h3 className="time">{props.todo.date}</h3>
        <img
          src={Done}
          className="done"
          alt=""
          onClick={() => {
            done(props.todo);
          }}
        />
        <img
          src={Bin}
          className="del"
          alt=""
          onClick={() => {
            props.del(props.todo);
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
