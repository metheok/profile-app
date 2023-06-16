import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}
