import "./App.css";
import NewUserFormPage from "./pages/NewUserFormPage";
import LoginFormPage from "./pages/LoginFormPage";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { UserStorage } from "./contexts/UserContext";
import ProtectedRoute from "./components/helper/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Navigation />
          <Routes>
            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/cadastro" element={<NewUserFormPage />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
