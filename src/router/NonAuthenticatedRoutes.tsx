import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Subscribe from "../pages/Subscribe";
import RecoverPass from "../pages/RecoverPass";
import LandingPage from "../pages/LandingPage";

export default function NonAuthenticatedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Subscribe />} />
        <Route path="/recoverpass" element={<RecoverPass />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to={"/landpage"} replace />} />
      </Routes>
    </Router>
  );
}
