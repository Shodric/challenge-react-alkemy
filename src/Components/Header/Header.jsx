import { useContext, useState } from "react";
import styles from "./Header.module.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/ContextAuth";

const Header = () => {
  const { auth } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <header>
      <Link to="/">
        <h2 className={styles.logo}>Super Hero API</h2>
      </Link>

      <div className={styles.headerWrapper}>
        {!auth ? <Link to="/favorites">Favoritos</Link> : null}

        {auth ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/login">Logout</Link>
        )}
        <Search />
      </div>

      {!showNav ? (
        <div className={styles.wrapper} onClick={handleShow}>
          <div className={styles.wrappercito}></div>
          <div className={styles.wrappercito}></div>
          <div className={styles.wrappercito}></div>
        </div>
      ) : (
        <div className={styles.x} onClick={handleShow}>
          <div className={styles.x1}></div>
          <div className={styles.x2}></div>
        </div>
      )}

      {showNav ? (
        <div className={styles.wrap}>
          <Link to="/">
            <h2 className={styles.logo} onClick={handleShow}>
              Super Hero API
            </h2>
          </Link>
          <Search className={styles.SearchWrap} />

          {!auth ? (
            <Link to="/favorites" onClick={handleShow}>
              Favoritos
            </Link>
          ) : null}

          {auth ? (
            <Link to="/login" onClick={handleShow}>
              Login
            </Link>
          ) : (
            <Link to="/login" onClick={handleShow}>
              Logout
            </Link>
          )}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
