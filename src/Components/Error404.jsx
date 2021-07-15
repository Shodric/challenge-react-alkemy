import { Link } from "react-router-dom";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.main}>
      <img
        src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/page_not_found_su7k.svg"
        alt="Error 404"
      />
      <br />
      <h2>Perdon por eso, no volverá a pasar</h2>
      <br />
      <Link className={styles.button} to="/">
        Volver al inicio
      </Link>
      <br />
    </div>
  );
};

export default Error404;
