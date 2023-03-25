import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`https://faithful-yak-glasses.cyclic.app/user`).then((res) => {
      setUser(res.data.data);
    });
  }, []);
  return (
    <div>
      {user.map((elem) => {
        return (
          <div>
            <h1>User name : {elem.name}</h1>
            <p>Tasks Assigned : {elem.Task.length}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
