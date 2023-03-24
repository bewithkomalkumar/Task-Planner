import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>Task Planner</h1>
      <div>
        <Link to={"/create_sprint"}>Create Sprint</Link>
        <Link to={"/addtask"}>Add Task</Link>
        <Link to={"/alltasks"}>Show Task</Link>
        <Link to={"/users"}>Users</Link>
      </div>
    </div>
  );
}

export default Navbar;
