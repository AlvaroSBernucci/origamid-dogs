import "./App.css";
import NewUserFormPage from "./pages/NewUserFormPage";
import LoginFormPage from "./pages/LoginFormPage";
import UserPage from "./pages/UserPage";
import UserPhotoPost from "./components/user/UserPhotoPost";
import Feed from "./components/feed/Feed";
import UserStats from "./components/user/UserStats";
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
              }>
              <Route path="/conta/feed" element={<Feed />} />
              <Route path="/conta/postar" element={<UserPhotoPost />} />
              <Route path="/conta/estatisticas" element={<UserStats />} />
            </Route>
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/cadastro" element={<NewUserFormPage />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
