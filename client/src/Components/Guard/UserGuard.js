import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function UserGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return <>{children}</>;
}
