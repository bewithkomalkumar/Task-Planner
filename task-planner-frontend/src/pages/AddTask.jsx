import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [sprint, setSprint] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/sprint`).then((res) => {
      //console.log(res);
      setSprint(res.data.data);
    });
  }, []);

  return (
    <div>
      <h1>Select a Sprint</h1>
      {sprint.map((elem) => {
        return (
          <div key={elem._id}>
            <h3>Month : {elem.month}</h3>
            <p>Week - {elem.week}</p>
            <p>Tasks- {elem.tasks.length}</p>
            <Link to={`${elem._id}`}>
              <button>Add A new Task</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AddTask;
