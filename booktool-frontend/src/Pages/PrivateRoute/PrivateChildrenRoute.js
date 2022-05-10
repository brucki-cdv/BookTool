import React from "react";
import { Route, Redirect } from "react-router-dom";
import useFindUser from "../../Hooks/useFindUser";

import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const navigate = useNavigate();
  const { user, isLoading } = useFindUser();
  const { element, children, path } = props;
  if (isLoading) {
    return <span>loading</span>;
  }
  if (user) {
    return (
      <Route path={path} element={element}>
        {children}
      </Route>
    );
  }

  return navigate('/login');
}
