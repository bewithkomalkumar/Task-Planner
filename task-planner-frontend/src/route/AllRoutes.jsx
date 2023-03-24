import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSprint from "../pages/CreateSprint";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/create_sprint" element={<CreateSprint />} />
      </Routes>
    </div>
  );
};
