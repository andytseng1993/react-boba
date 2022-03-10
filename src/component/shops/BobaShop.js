import classes from "./BobaShop.module.css";
import Card from "../ui/Card";
import BobaDescription from "./BobaDescription";
import {faHeart,faLocationDot,faCrown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import PopularBobaShop from "../store/popularbobashop";
import BobaShopInfoBtn from "./BobaShopInfoBtn";

function BobaShop(props) {
  const [favoriteNumber, setfavoriteNumber] = useState(props.favorite);
  const shopChange = { ...props };
  const PopularBobaShopContext = useContext(PopularBobaShop);
  const isMaxFavorite=PopularBobaShopContext.isMaxFavoriteShopHandler(props.id)

  useEffect(() => {
    PopularBobaShopContext.addFavoriteShopHandler({
      [props.id]: favoriteNumber,
    });
    PopularBobaShopContext.findMaxFavoriteNumberHandler(favoriteNumber);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function favoriteNum(count) {
    shopChange.favorite = count + 1;
    setfavoriteNumber((prev) => prev + 1);
    PopularBobaShopContext.addFavoriteShopHandler({
      [props.id]: shopChange.favorite,
    });
    PopularBobaShopContext.findMaxFavoriteNumberHandler(shopChange.favorite);
   
    axios
      .put(
        `${process.env.REACT_APP_FIREBASEAPI_URL}/${props.id}.json`,
        shopChange
      )
      .catch((err) => {
        console.log(err);
      });
  }
  

  return (
    <li className={classes.shop}>
      <Card>
        <div className={classes.row}>
          {isMaxFavorite? (
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
            <address className={classes.address}>
              <FontAwesomeIcon
                className={classes.addressIcon}
                icon={faLocationDot}
              />
              {props.address}
            </address>
            <BobaDescription description={props.description[0]} />
          </div>
        </div>
        <BobaShopInfoBtn id={props.id}/>
      </Card>
    </li>
  );
}

export default BobaShop;
