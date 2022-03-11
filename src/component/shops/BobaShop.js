import classes from "./BobaShop.module.css";
import Card from "../ui/Card";
import BobaDescription from "./BobaDescription";
import {
  faHeart,
  faLocationDot,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import PopularBobaShop from "../store/popularbobashop";
import BobaShopInfoBtn from "./BobaShopInfoBtn";

function BobaShop(props) {
  const [favoriteNumber, setfavoriteNumber] = useState(props.favorite);
  const PopularBobaShopContext = useContext(PopularBobaShop);
  const isMaxFavorite = PopularBobaShopContext.isMaxFavoriteShopHandler(
    props.id
  );
  let address = `https://maps.google.com/?q=${encodeURIComponent(
    props.shopName+' '+props.address
  )}`;

  useEffect(() => {
    PopularBobaShopContext.addFavoriteShopHandler({
      [props.id]: favoriteNumber,
    });
    PopularBobaShopContext.findMaxFavoriteNumberHandler(favoriteNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function favoriteNum(favoriteNum) {
    let shopFavorite = favoriteNum + 1;
    setfavoriteNumber((prev) => prev + 1);
    PopularBobaShopContext.addFavoriteShopHandler({
      [props.id]: shopFavorite,
    });
    PopularBobaShopContext.findMaxFavoriteNumberHandler(shopFavorite);

    axios
      .get(`${process.env.REACT_APP_FIREBASEAPI_URL}/${props.id}/favorite.json`)
      .then((res) => {
        let favorite = res.data + 1;
        axios
          .put(
            `${process.env.REACT_APP_FIREBASEAPI_URL}/${props.id}/favorite.json`,
            favorite
          )
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <li className={classes.shop}>
      <Card>
        <div className={classes.row}>
          {isMaxFavorite ? (
            <div className={classes.crown}>
              <FontAwesomeIcon icon={faCrown} />
            </div>
          ) : (
            ""
          )}
          <div className={classes.image}>
            <img src={props.image} alt={props.shopName} />
          </div>
          <div className={classes.content}>
            <div className={classes.shopTitle}>
              <h4 className={classes.shopName}>{props.shopName}</h4>
              <div className={classes.favorite}>
                <FontAwesomeIcon
                  className={classes.action}
                  icon={faHeart}
                  onClick={() => favoriteNum(favoriteNumber)}
                />
                <span className={classes.favoriteNumber}>{favoriteNumber}</span>
              </div>
            </div>
            <div className={classes.bobaTeaName}>{props.bobaTeaName}</div>
            <a
              className={classes.address}
              href={address}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={classes.addressIcon}
                icon={faLocationDot}
              />
              {props.address}
            </a>
            <BobaDescription description={props.description[0]} />
          </div>
        </div>
        <BobaShopInfoBtn id={props.id} />
      </Card>
    </li>
  );
}

export default BobaShop;
