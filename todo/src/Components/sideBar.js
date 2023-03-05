import React from "react";
import "./sideBar.css";
import Home from "./images/home.png";
import Add from "./images/add.png";
import About from "./images/about.png";
import { Link } from "react-router-dom";
const Header = (props) => {


  setTimeout(() => {
    document.getElementById("sidebar").style.backgroundColor = props.clr;
  }, 100);
  function changeL() {
    document.getElementById("sidebar").style.backgroundColor =
      "rgba(208, 208, 208, 0.527)";
    document.body.style.background = "white";
  }
  function changeB() {
    document.getElementById("sidebar").style.backgroundColor =
      "rgba(0, 0, 0, 0.925)";
    document.body.style.background = "white";
    document.getElementById("list").style.color = "black";
  }
  return (
    <>
      <div className="sidebar" id="sidebar">

        <Link to='/'>
          <img
            alt=""
            src={Home}
            className="home  op"
            id="home"

          ></img>
        </Link>
        <Link to='/add'>
          <img alt='' src={Add} className="add op" id="add"></img>
        </Link>
        <Link to='/about'>
          <img
            alt=""
            src={About}
            className="about op"
            id="about"
          ></img>
        </Link>
        <div className="light" onClick={changeL}></div>
        <div className="dark" onClick={changeB}></div>
      </div>
    </>
  );
};

export default Header;
