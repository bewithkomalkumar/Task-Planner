import axios from "axios";

import React, { useEffect, useState } from "react";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/task`).then((res) => {
      setTasks(res.data.data);
      console.log(res);
    });
    //setNames([]);
    // tasks.map((elem) => [setNames([...names, getUser(elem.assigned)])]);
    console.log(names);
  }, []);
  console.log(names);
  const getUser = (id) => {
    let name = "";
    axios.get(`http://localhost:3030/users/${id}`).then((res) => {
      console.log(res);
      name = res.data.user.name;
      // console.log(res.data.user.name);
      return name;
    });
  };

  return (
    <div>
      {tasks.map((elem, index) => {
        return (
          <div key={elem._id}>
            <h3>Type : {elem.type}</h3>
            <p>Description : {elem.desc}</p>
            <p>Assinged to : </p>
            <p>Status : {elem.status ? "Completed" : "Not Completed"}</p>
            <button>Change Status</button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTask;
