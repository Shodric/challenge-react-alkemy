import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/ContextAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return (
    <Route {...rest}>{auth ? <Redirect to="/login" /> : <Component />}</Route>
  );
};

export default PrivateRoute;
