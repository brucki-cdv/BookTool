import React from "react";
import { Route } from "react-router-dom";
import useFindUser from "../../Hooks/useFindUser";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  console.log("USER = ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
