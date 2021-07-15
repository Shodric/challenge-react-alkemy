import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./CardsHeroes.module.css";
import ContextFav from "../../Context/ContextFav";

const CardsHeroes = ({ heroes, start, end }) => {
  const { sumFav, fav, removeFav } = useContext(ContextFav);

  return (
    <div className={styles.container} key={heroes.id}>
      {heroes.slice(start, end).map((heroes) => (
        <div className={styles.motherCard}>
          {fav.some((fav) => fav.id === heroes.id) ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.starSelected}
                onClick={() => removeFav(heroes)}
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              <div
                className={styles.postStarDel}
                onClick={() => removeFav(heroes)}
              >
                Eliminar
              </div>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.star}
                onClick={() => sumFav(heroes)}
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              <div className={styles.postStar} onClick={() => sumFav(heroes)}>
                Añadir
              </div>
            </>
          )}

          <Link to={"/details/" + heroes.id}>
            <div className={styles.cardHeroes}>
              <img src={heroes.images.sm} alt={heroes.name} />
              <img
                src={heroes.images.sm}
                alt={heroes.name}
                className={styles.realisticShadow}
              />
              <div className={styles.shadow}></div>
              <div className={styles.ring}>
                <div className={styles.powers}>
                  {heroes.powerstats.intelligence +
                    heroes.powerstats.speed +
                    heroes.powerstats.strength +
                    heroes.powerstats.durability +
                    heroes.powerstats.power +
                    heroes.powerstats.combat}
                </div>
              </div>
              <p>{heroes.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardsHeroes;
