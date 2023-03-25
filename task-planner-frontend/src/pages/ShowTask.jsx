import axios from "axios";

import React, { useEffect, useState } from "react";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3030/task`).then((res) => {
      setTasks(res.data.data);
      console.log(res);
    });
    //setNames([]);
    // tasks.map((elem) => [setNames([...names, getUser(elem.assigned)])]);
    //console.log(names);
  }, []);
  const getData = () => {
    axios.get(`http://localhost:3030/task`).then((res) => {
      setTasks(res.data.data);
      console.log(res);
    });
  };

  const getUser = (id) => {
    let name = "";
    axios.get(`http://localhost:3030/users/${id}`).then((res) => {
      console.log(res);
      name = res.data.user.name;
      // console.log(res.data.user.name);
      return name;
    });
  };

  const changeStatus = (id) => {
    axios
      .post(`http://localhost:3030/addtask/update_status`, { id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
    getData();
    // toggle ? setToggle((prev) => false) : setToggle((prev) => true);
  };

  return (
    <div>
      {tasks.map((elem, index) => {
        return (
          <div key={elem._id + elem.status}>
            <h3>Type : {elem.type}</h3>
            <p>Description : {elem.desc}</p>
            <p>Assinged to : </p>
            <p>Status : {elem.status ? "Completed" : "Not Completed"}</p>
            <button onClick={() => changeStatus(elem._id)}>
              Change Status
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTask;
