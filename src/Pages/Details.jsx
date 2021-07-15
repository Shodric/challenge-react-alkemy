import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Error404 from "../Components/Error404";
import styles from "./Details.module.css";

const Details = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/id/" + heroId + ".json")
      .then((response) => response.json())
      .then((response) => {
        setHero(response);
      });
  }, [heroId, setHero]);

  if (!Object.keys(hero).length) {
    return <Error404 />;
  } else {
    return (
      <div className={styles.details}>
        <img src={hero.images.lg} alt={hero.name} className={styles.img} />
        <div className={styles.principalInfo}>
          <div className={styles.title}>
            <h1>
              {hero.name} - {hero.biography.fullName}
            </h1>
            <Link to={`/publisher/${hero.biography.publisher}`}>
              {hero.biography.publisher}
            </Link>
          </div>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.header}>
                <th colSpan="2">Habilidades</th>
              </tr>
              <tr>
                <th>Inteligencia</th>
                <th> {hero.powerstats.intelligence}</th>
              </tr>
              <tr>
                <th>Fuerza</th>
                <th> {hero.powerstats.strength}</th>
              </tr>
              <tr>
                <th>Velocidad</th>
                <th> {hero.powerstats.speed}</th>
              </tr>
              <tr>
                <th>Durabilidad</th>
                <th> {hero.powerstats.durability}</th>
              </tr>
              <tr>
                <th>Poder</th>
                <th> {hero.powerstats.power}</th>
              </tr>
              <tr>
                <th>Combate</th>
                <th> {hero.powerstats.combat}</th>
              </tr>
              <tr>
                <th>Total</th>
                <th>
                  {hero.powerstats.intelligence +
                    hero.powerstats.strength +
                    hero.powerstats.speed +
                    hero.powerstats.durability +
                    hero.powerstats.power +
                    hero.powerstats.combat}
                </th>
              </tr>

              <tr className={styles.header}>
                <th colSpan="2">Apariencia</th>
              </tr>
              <tr>
                <th>Género</th>
                <th>{hero.appearance.gender}</th>
              </tr>
              <tr>
                <th>Raza</th>
                <th>{hero.appearance.race}</th>
              </tr>
              <tr>
                <th>Altura</th>
                <th>{hero.appearance.height[1]}</th>
              </tr>
              <tr>
                <th>Peso</th>
                <th>{hero.appearance.weight[1]}</th>
              </tr>
              <tr>
                <th>Color de ojos</th>
                <th>{hero.appearance.eyeColor}</th>
              </tr>
              <tr>
                <th>Color de pelo</th>
                <th>
                  {hero.appearance.hairColor === "No Hair"
                    ? "-"
                    : hero.appearance.hairColor}
                </th>
              </tr>

              <tr className={styles.header}>
                <th colSpan="2">Biografía</th>
              </tr>
              <tr>
                <th>Nombre</th>
                <th>{hero.biography.fullName}</th>
              </tr>
              <tr>
                <th>Alteregos</th>
                <th>
                  {hero.biography.alterEgos === "No alter egos found."
                    ? "-"
                    : hero.biography.alterEgos}
                </th>
              </tr>
              <tr>
                <th>Alias</th>
                <th>{hero.biography.aliases[0]}</th>
              </tr>
              <tr>
                <th>Nacimiento</th>
                <th>{hero.biography.placeOfBirdth}</th>
              </tr>
              <tr>
                <th>1a aparición</th>
                <th>{hero.biography.firstAppearance}</th>
              </tr>
              <tr>
                <th>Editor</th>
                <th>{hero.biography.publisher}</th>
              </tr>
              <tr>
                <th>Alineación</th>
                <th>{hero.biography.alignment}</th>
              </tr>

              <tr className={styles.header}>
                <th colSpan="2">Conexiones</th>
              </tr>
              <tr>
                <th>Grupos afiliados</th>
                <th>{hero.connections.groupAffiliation}</th>
              </tr>
              <tr>
                <th>Relativo</th>
                <th>{hero.connections.relatives}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default Details;
