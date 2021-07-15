import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextFav from "../Context/ContextFav";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { fav, removeFav } = useContext(ContextFav);

  return (
    <>
      <h1 className={styles.title}>Heroes Favoritos</h1>
      <div className={styles.cuadricula}>
        {fav.length === 0 ? (
          <div className={styles.noFav}>
            <img
              className={styles.noFavImg}
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Powerful_re_frhr.svg"
              alt="NoFav"
            />
            <h1>Aún no elegiste ningún favorito</h1>
            <h2>¿qué estas esperando?</h2>
            <Link to="/" className={styles.ir}>
              Ver heroes
            </Link>
            <br /> <br />
          </div>
        ) : (
          fav.map((fav) => (
            <div key={fav.id} className={styles.favCard}>
              <img src={fav.images.md} alt={fav.name} />
              <div className={styles.info}>
                <p>
                  {fav.name} - {fav.biography.fullName}
                </p>
                <>
                  <div
                    className={styles.postStarDel}
                    onClick={() => removeFav(fav)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={styles.starSelected}
                      onClick={() => removeFav(fav)}
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                    Eliminar
                  </div>
                </>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Favorites;
