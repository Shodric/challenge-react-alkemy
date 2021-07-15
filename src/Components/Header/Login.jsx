import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import AuthContext from "../../Context/ContextAuth";

const Login = () => {
  const { auth, handleAuth, setEmail, setPassword } = useContext(AuthContext);

  return (
    <div className={styles.login}>
      {auth ? (
        <>
          <h1>Para acceder debe iniciar sesion</h1>
          <form className={styles.form}>
            <input
              required
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>Ingresar</button>
          </form>
        </>
      ) : (
        <>
          <h1>Ya estas logueado</h1>
          <Link to="/">Ir a la pagina principal</Link>
          <br />
          <br />
          <br />
          <h3>¿Desea cerrar sesion?</h3>
          <form className={styles.form}>
            <button onClick={handleAuth}>Cerrar sesion</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
