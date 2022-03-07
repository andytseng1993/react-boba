import { createContext, useState } from "react";

const PopularBobaShop = createContext({
  favoriteShop: {},
  maxFavorite: 0,
  addFavoriteShopHandler: (favoriteShop) => {},
  findMaxFavoriteNumberHandler: (number) => {},
  isMaxFavoriteShopHandler: (shopId) =>{}
});

export default PopularBobaShop;

export function PopularBobaShopProvider(props) {
  const [userFavoritesMax, setUserFavoritesMax] = useState(0);
  const [favoriteShop, setFavoriteShop] = useState({});

  function addFavoriteShopHandler(favoriteShop) {
    setFavoriteShop((preFavorites) => {
      return preFavorites.assign(favoriteShop);
    });
  }
  function findMaxFavoriteNumberHandler(number) {
    setUserFavoritesMax((prevousNumber) => {
      return Math.max(prevousNumber, number);
    });
  }
  function isMaxFavoriteShopHandler(shopId) {
    const maxFavoriteShop = Object.keys(favoriteShop).filter(
      (key) => favoriteShop[key] === userFavoritesMax
    );
    return maxFavoriteShop.includes(shopId)
  }

  const context = {
    favoriteShop: favoriteShop,
    maxFavorite: userFavoritesMax,
    addFavoriteShop: addFavoriteShopHandler,
    findMaxFavoriteNumber: findMaxFavoriteNumberHandler,
    isMaxFavoriteShopHandler: isMaxFavoriteShopHandler,
  };

  return (
    <PopularBobaShop.Provider value={context}>
      {props.children}
    </PopularBobaShop.Provider>
  );
}
