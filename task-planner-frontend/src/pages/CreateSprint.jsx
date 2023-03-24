import React, { useState } from "react";
import axios from "axios";

const CreateSprint = () => {
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleWeek = (e) => {
    setWeek(e.target.value);
  };
  const CreateSprint = () => {
    if (month !== "" && week !== "") {
      axios
        .post(`http://localhost:3030/sprint/create_sprint`, {
          month,
          week: Number(week),
        })
        .then((res) => {
          console.log(res);
        })
        .catch((Err) => {
          console.log(Err);
        });
    } else {
      alert("Please select proper input field");
    }
  };
  return (
    <div>
      <select onChange={handleMonth}>
        <option value="">Select Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <select onChange={handleWeek}>
        <option value="">Select Week</option>
        <option value="1">Week-1</option>
        <option value="2">Week-2</option>
        <option value="3">Week-3</option>
        <option value="4">Week-4</option>
      </select>

      <button onClick={CreateSprint}>Create Sprint</button>
    </div>
  );
};

export default CreateSprint;
