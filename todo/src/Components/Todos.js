import TodoItem from "./TodoItem";
import "../App.css";
import dell from "./images/delete.png";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addCatg, delCatg, delTodo } from "../redux/features/userSlice";
import { useHistory } from "react-router-dom";
import High from "./High";
import Logout from "./Logout";
const Todos = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"))
  const [work, changeWork] = useState(JSON.parse(localStorage.getItem('user')).todo)
  useEffect(() => {
    changeWork(JSON.parse(localStorage.getItem('user')).todo.sort((a, b) => {
      let fa = a.date.toLowerCase(),
        fb = b.date.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    }))
  }, [])
  let sno = 0;
  const obj = []

  work && Object.keys(work).forEach(function (key, index) { obj.push(work[key]); });

  const [formValue, setformValue] = useState({ email: "", catg: "" });
  const [formValue1, setformValue1] = useState({ email: "", catg: "" });
  const [formValue2, setformValue2] = useState({ email: "", title: "" });
  const del = (e) => {
    setformValue2({ ...formValue2, title: e.title })
  }
  useEffect(() => {
    if (formValue2.title) {
      changeWork(work.filter((e) => {
        return e.title !== formValue2.title;
      }))
      dispatch(delTodo({ formValue2, history }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue2.title])
  useEffect(() => {
    setformValue({ ...formValue, email: user.email })
    setformValue1({ ...formValue1, email: user.email })
    setformValue2({ ...formValue2, email: user.email })
    if (!user.email) {
      history.push("/logreg")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email])




  const [myCatg, changeCatg] = useState(JSON.parse(localStorage.getItem("user")).catg)
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value })
  }
  const addCatG = () => {
    document.getElementById("aacc").style.display = "none";
    if (formValue.email !== '') {
      dispatch(addCatg({ formValue, history }))
    }
    setTimeout(() => {

      window.location.reload(false);
    }, 1000);
  }
  const bck = () => {
    document.getElementById("aacc").style.display = "none";

  }

  const adctg = () => {
    document.getElementById("aacc").style.display = "inline-block";
  }
  const delctg = (e) => {
    const { name } = e.target;
    setformValue1({ ...formValue1, catg: name })
    changeCatg(myCatg.filter((x) => {
      return x !== name;
    }))
  }
  const filterr = (e) => {
    const obj = JSON.parse(localStorage.getItem('user')).todo;
    changeWork(obj.filter(x => {
      return x.catg === e;
    }))
  }
  const showAll = () => {
    const obj = JSON.parse(localStorage.getItem('user')).todo;
    changeWork(obj)
  }
  useEffect(() => { }, [work])
  let date = new Date();
  useEffect(() => {
    if (formValue1.catg) {
      dispatch(delCatg({ formValue1, history }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue1.catg])
  return (
    <div id="hm">
      <Logout />
      <div className="dt">
        <h3 className="t">Today</h3>
        <h1 className="d">{date.getDate()}</h1>
        <hr className="ln" />
        <h3 className="m">{date.getMonth() + 1}</h3>
        <h3 className="y">{date.getFullYear()}</h3>
      </div>

      <div className="list" id="list">
        <h1 className="user">Hey {user.fname}</h1>
        <div className="typewriter">
          <h1 id="typewriter">Your tasks are here</h1>
        </div>
        <div className="catg" id="catgg">
          <div
            className="ct"
            key="all"
            name="ctg"
            onClick={showAll}
          >
            <h3>All</h3>
          </div>
          {myCatg && Array.from(myCatg).map((e) => {
            return (
              <>
                <div
                  className="ct"
                  key={e}
                  id={e}
                  name="ctg"
                  onClick={() => { filterr(e) }}
                >
                  <h3 key={e}>{e}</h3>
                  <img
                    src={dell}
                    alt=""
                    name={e}
                    className="dell"

                    onClick={delctg}
                  />
                </div>
              </>
            );
          })}

          <div className="ct" onClick={adctg}><h3>Add a category</h3></div>

        </div>

        <div className="aac" id="aacc">
          <textarea
            name="catg"
            id="aac"
            cols="30"
            rows="2"
            autoFocus
            placeholder="Add a category "
            required
            onChange={onInputChange}
          ></textarea>
          <button id="bb" onClick={bck}>
            Back
          </button>
          <button type="submit" id="acb" onClick={addCatG}>
            Add
          </button>

        </div>
        <></>


        <div className="cards">
          {obj && obj.map((e) => {
            sno++;
            return (
              <TodoItem
                key={e.title}
                cls={e.catg}
                todo={e}
                sno={sno}
                del={del}
              />
            );
          })}
        </div>
        <High work={work} />

      </div>
    </div>
  );
};

export default Todos;
