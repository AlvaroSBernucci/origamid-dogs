import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
