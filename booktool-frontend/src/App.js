import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ReservationsListContainer from "./Pages/ReservationsList/ReservationListContainer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Analytics from "./Pages/Analytics/Analytics";
import Apartments from "./Pages/Apartments";
import Clients from "./Pages/Clients/Clients";
import useFindUser from "./Hooks/useFindUser";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import PrivateChildrenRoute from "./Pages/PrivateRoute/PrivateChildrenRoute";
import authService from "./Services/auth.service";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const checkIfLoggin = async() => {
    await authService
    .getUser()
    .then((res) => {
      dispatch({ type: "SET_USER", payload: res.data.currentUser });
      setUser(res.data.currentUser);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
  }


  useEffect(() => {
    checkIfLoggin();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/rezerwacje/lista"
            element={
              <PrivateRoute>
                <ReservationsListContainer />
              </PrivateRoute>
            }
          />
          {/* <Route path="rezerwacje/kalendarz" element={<ReservationsCalendar />}/> */}
          <Route
            path="/analizy"
            element={
              <PrivateRoute
                component={
                  <PrivateRoute>
                    <Analytics />
                  </PrivateRoute>
                }
              />
            }
          />
          <Route
            path="/klienci"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path="/domy"
            element={
              <PrivateRoute>
                <Apartments />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
