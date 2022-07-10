import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserPage from "./UserPage";
import Users from "./User";
import PrivateRoute from '../component/PrivateRoute';

const AllRoutes=()=>{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
            <PrivateRoute>
                <Users />
            </PrivateRoute>
        }
      />
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default AllRoutes