import "./App.css";
import SideBar from "./Components/sideBar";
import Todos from "./Components/Todos";
import AddItem from "./Components/Additem";
import About from "./Components/About";
import LogReg from "./Components/Login"
import { useSelector } from "react-redux";
import React from "react";
import {
  Switch,
  Route,
  useHistory,

} from "react-router-dom";
function App() {
  const history = useHistory()
  const user1 = useSelector((state) => (state.user.user))
  const user2 = JSON.parse(localStorage.getItem('user'))
  if (!user1 && !user2) {
    history.push("/logreg")
  }
  return (
    <>
      <Switch>
        <Route exact path="/logreg">
          {!user1 && !user2 && <LogReg />}
        </Route>
        {(user1 || user2) &&
          <React.Fragment  >
            <SideBar clr={"rgba(0, 0, 0, 0.925)"} />
            <Route exact path="/add">
              <AddItem />
            </Route>
            <Route exact path="/">
              <Todos />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </React.Fragment>}
      </Switch>
    </>
  );
}

export default App;
