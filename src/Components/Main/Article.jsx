import { useState, useEffect } from "react";
import { SectionCharging } from "./SectionHeroes";
import axios from "axios"
import SectionHeroes from "./SectionHeroes";
import styles from "./Article.module.css";

const Article = () => {


  const style = {
    width: "100%",
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroes, setHeroes] = useState([]);


  //Aquí no se puede utilizar axios por la naturalidad del archivo :( ya que quise colocar un grid
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((response) => {
          setIsLoaded(true);
          setHeroes(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [setHeroes]);

  if (error) {
    return <div className={styles.fetchError}>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <article>
        <SectionCharging />
      </article>
    );
  } else {
    return (
      <article style={style}>
        <SectionHeroes heroes={heroes} />
      </article>
    );
  }
};

export default Article;
