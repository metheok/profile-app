import React from "react";
import css from "./Signup.module.css";
import { Link } from "react-router-dom";
import UserGuard from "../Guard/UserGuard";
import SignupForm from "../../Forms/SignupForm/SignupForm";
import useAuth from "../../Hooks/useAuth";
export default function Signup() {
  const { register } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSignup = async (data) => {
    setLoading(true);

    if (data && data.username && data.password && data.name) {
      const err = await register(data);
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
          <h4>Sign Up</h4>

          <SignupForm loading={loading} error={error} onSubmit={onSignup} />

          <div>
            <p>
              <Link to="/login">Login</Link> if user already exists
            </p>
          </div>
        </div>
      </div>
    </UserGuard>
  );
}
