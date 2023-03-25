import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSprint from "../pages/CreateSprint";
import AddTask from "../pages/AddTask";
import AddTaskToSprint from "../pages/AddTaskToSprint";
import ShowTask from "../pages/ShowTask";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/create_sprint" element={<CreateSprint />} />

        <Route path="/addtask" element={<AddTask />} />
        <Route path="/addtask/:id" element={<AddTaskToSprint />} />
        <Route path="/alltasks" element={<ShowTask />} />
      </Routes>
    </div>
  );
};
