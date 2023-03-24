import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>Task Planner</h1>
      <div>
        <Link>Create Sprint</Link>
        <Link>Add Task</Link>
        <Link>Show Task</Link>
        <Link>Users</Link>
      </div>
    </div>
  );
}

export default Navbar;
