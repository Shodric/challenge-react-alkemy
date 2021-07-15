import React, { useState, useEffect } from "react";
import styles from "./Publisher.module.css";

import { useParams } from "react-router-dom";

const Publisher = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { publisher } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => response.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setHero(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [publisher, setHero]);

  

  if (error) {
    return "error";
  } else if (!isLoaded) {
    return "Cargando";
  } else {
    return (
      <div className={styles.main}>
        <h1>{publisher}</h1>
        <div>
        </div>
      </div>
    );
  }
};

export default Publisher;
