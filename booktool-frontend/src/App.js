import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import ReservationsListContainer from "./Pages/ReservationsList/ReservationListContainer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Analytics from "./Pages/Analytics/Analytics";
import Messages from "./Pages/Messages/Messages";
import Clients from "./Pages/Clients/Clients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rezerwacje/lista" element={<ReservationsListContainer />} />
          {/* <Route path="rezerwacje/kalendarz" element={<ReservationsCalendar />}/> */}
          <Route path="/analizy" element={<Analytics />} />
          <Route path="/klienci" element={<Clients />} />
          <Route path="/wiadomosci" element={<Messages />} />
        </Route>
        <Route path="/logowanie" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
