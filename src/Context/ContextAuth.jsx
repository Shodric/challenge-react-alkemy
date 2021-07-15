import { useState, createContext } from "react";

const AuthContext = createContext();

const initialAuth = false;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (auth) {
      localStorage.removeItem("password", password);
      localStorage.removeItem("email", email);
      setAuth(false);
    } else {
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      setAuth(true);
    }
  };

  const data = { auth, handleAuth, setEmail, setPassword, email, password };

  return <AuthContext.Provider value={data} children={children} />;
};

export { AuthProvider };
export default AuthContext;
