import React, { useState, useEffect, useRef } from "react";
import Styles from "./Search.module.css";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

const Search = () => {
  const [hero, setHero] = useState([]);
  const [filter, setFilter] = useState([]);

  const ref = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = hero.filter((hero) => {
      return hero.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  };

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((response) => {
        setHero(response);
      });
  }, [setHero]);

  return (
    <div className={Styles.bar} onClick={() => setOpen(true)}>
      <input type="text" placeholder="Buscar..." onChange={handleFilter} />

      {open
        ? filter.length !== 0 && (
            <div className={Styles.result} ref={ref}>
              {filter.slice(0, 4).map((hero) => {
                return (
                  <Link to={`/details/${hero.id}`} className={Styles.item}>
                    <div className={Styles.column}>
                      <img src={hero.images.xs} alt={hero.name} />
                      <p>{hero.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )
        : ""}
    </div>
  );
};

export default Search;
