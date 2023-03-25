import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const AddTaskToSprint = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("");
  const [assigned, setAssigned] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3030/user`).then((res) => {
      setUser(res.data.data);
      console.log(res);
    });
  }, []);

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleAssigned = (e) => {
    setAssigned(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const CreateTask = () => {
    if (type !== "" && assigned !== "" && desc !== "") {
      axios
        .post(`http://localhost:3030/addtask/create_task`, {
          type,
          assigned,
          desc,
        })
        .then((res) => {
          console.log(res);
          alert("Task Created Successfully");
        })
        .catch((err) => {
          console.log(alert("Error !"));
        });
    } else {
      alert("Please Fill All The Fields");
    }
  };
  return (
    <div>
      AddTaskToSprint
      <h1>{id}</h1>
      <select onChange={handleType}>
        <option value="">Select Type of Task</option>
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
        <option value="Story">Story</option>
      </select>
      <select onChange={handleAssigned}>
        <option value="">Assigned to</option>
        {user.map((elem) => {
          return (
            <option value={`${elem._id}`} key={elem._id}>
              {elem.name}
            </option>
          );
        })}
      </select>
      <textarea
        cols="30"
        rows="5"
        placeholder="Add Task Description "
        onChange={handleDesc}
      ></textarea>
      <button onClick={CreateTask}>Assigned Task</button>
    </div>
  );
};

export default AddTaskToSprint;
