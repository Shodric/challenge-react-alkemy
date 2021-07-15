import { useState, useEffect, createContext } from "react";

const ContextFav = createContext();

const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const localFav = JSON.parse(localStorage.getItem("Favorites"));
    setFav(localFav);
  }, []);

  const saveLocalStorange = (items) => {
    localStorage.setItem("Favorites", JSON.stringify(items));
  };

  const sumFav = (heroes) => {
    const newFavList = [...fav, heroes];
    setFav(newFavList);
    saveLocalStorange(newFavList);
  };

  const removeFav = (heroes) => {
    const newFavList = fav.filter((fav) => fav.id !== heroes.id);
    fav.localStorage.removeItem("Favorites", fav.id)
    setFav(newFavList);
  };

  const data = { fav, sumFav, removeFav };

  return <ContextFav.Provider value={data} children={children} />;
};

export { FavProvider };
export default ContextFav;
