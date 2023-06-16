import React from "react";
import css from "./Login.module.css";
import { Link } from "react-router-dom";
import UserGuard from "../Guard/UserGuard";
import LoginForm from "../../Forms/LoginForm/LoginForm";
import useAuth from "../../Hooks/useAuth";
export default function Login() {
  const { logIn } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onLogin = async (data) => {
    setLoading(true);

    if (data && data.username && data.password) {
      const err = await logIn(data);
      if (err) {
        console.log(err);
        setError(err);
      }
      setLoading(false);
    }
  };
  return (
    <UserGuard>
      <div className={css.root}>
        <div className={css.formContainer}>
          <h4>Login</h4>

          <LoginForm loading={loading} error={error} onSubmit={onLogin} />

          <div>
            <p>
              <Link to="/signup">Signup</Link> for a new user
            </p>
          </div>
        </div>
      </div>
    </UserGuard>
  );
}
