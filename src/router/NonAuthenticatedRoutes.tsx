import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/Login";

export default function NonAuthenticatedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to={"/landpage"} replace />} />
      </Routes>
    </Router>
  );
}
