
import "./add.css";
import add from "./images/add.png";
import work from "./images/free-time.png";
import time from "./images/deadline.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/userSlice";
import { useHistory } from "react-router-dom";

const AddItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"))
  const myCatg = JSON.parse(localStorage.getItem("user")).catg;
  // console.log(myCatg )
  const init = { email: "", title: "", catg: myCatg[0], date: "" }
  const [formValue, setformValue] = useState(init);
  const onInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setformValue({ ...formValue, [name]: value })
  }
  useEffect(() => {
    setformValue({ ...formValue, email: user.email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email])
  const addWork = (e) => {
    e.preventDefault();
    if (user) {
      console.log(formValue)
      dispatch(addTodo({ formValue, history }))
    }
  };
  return (
    <>
      {/* <div id="bl"></div>  */}
      <div className="new" id="new">
        <img src={add} className="addd" alt="" />
        <h1>Add a new task</h1>
        <h2>Task</h2>
        <img src={work} className="work" alt="" />

        <textarea
          name="title"
          onChange={onInputChange}
          id="title"
          cols="55"
          autoFocus
          required
          placeholder="Task description "
          rows="2"
        ></textarea>
        <h2>Deadline</h2>
        <img src={time} className="timee" alt="" />

        <input
          type="date"
          name="date"
          id="time"
          required
          onChange={onInputChange}
        />
        <label htmlFor="catg" id="lbl">
          Choose a Category
        </label>

        <select name="catg" id="catg" onChange={onInputChange}>
          {myCatg && myCatg.map((e) => {
            if (e !== "All" && e !== "Add a category")
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            return ""
          })}
        </select>

        <button
          type="submit"
          className="sbmit"
          onClick={addWork}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddItem;
