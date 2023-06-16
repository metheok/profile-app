import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { createCompany, fetchCompany, updateCompany } from "../apiCalls";

const initialState = {
  isAuthenticated: false,
  user: null,
  company: null,
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        company: payload.company,
      };
    case "UPDATE":
      return {
        ...state,
        company: payload.company,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        company: null,
      };
    default:
      return {
        ...state,
      };
  }
};

const AuthContext = createContext({
  ...initialState,
  logIn: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const [result, err] = await fetchCompany();
      if (err) {
        return console.error(err);
      }

      dispatch({
        type: "LOGIN",
        payload: {
          user: result.user,
          company: result.company,
        },
      });
    } else {
      delete axios.defaults.headers.common["authorization"];
    }
  };

  const onCreateCompany = async (data) => {
    const [result, err] = await createCompany(data);
    if (err) {
      return;
    }

    dispatch({
      type: "UPDATE",
      payload: {
        company: result.company,
      },
    });
  };
  const onUpdateCompany = async (data) => {
    const [result, err] = await updateCompany(data);
    if (err) {
      return console.error(err);
    }

    dispatch({
      type: "UPDATE",
      payload: {
        company: result.company,
      },
    });
  };
  const runFuction = async (state) => {
    if (!state?.user) {
      await getUserInfo();
    }
  };
  // verify user on reducer state init or changes
  useEffect(() => {
    runFuction(state);
  }, [state, runFuction]);

  const logIn = async ({ username, password }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body = JSON.stringify({ username, password });

    try {
      const res = await axios.post(`/api/auth/login`, body, config);
      localStorage.setItem("token", res.data.token);
      await getUserInfo();
      return null;
    } catch (err) {
      return err;
      console.error(err);
    }
  };

  const register = async ({ username, password, name }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const body = JSON.stringify({ username, password, name });

    try {
      const res = await axios.post(`/api/auth/signup`, body, config);
      localStorage.setItem("token", res.data.token);
      await getUserInfo();
      return null;
    } catch (err) {
      return err;

      console.error(err);
    }
  };

  const logOut = async (name, username, password) => {
    try {
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logIn,
        register,
        logOut,
        getUserInfo,
        onCreateCompany,
        onUpdateCompany,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
