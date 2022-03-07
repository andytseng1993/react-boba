import classes from "./BobaShop.module.css";
import Card from "../ui/Card";
import BobaDescription from "./BobaDescription";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

function BobaShop(props) {
  const [favoriteNumber, setfavoriteNumber] = useState(props.favorite);
  const shopChange = { ...props };
  
  function favoriteNum(count) {
    shopChange.favorite = count + 1;
    setfavoriteNumber((prev) => prev + 1);
    axios
      .put(
        `https://react-boba-shop-default-rtdb.firebaseio.com/bobashops/${props.id}.json`,
        shopChange
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <li className={classes.shop}>
      <Card>
        <div className={classes.row}>
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
            <BobaDescription description={props.description}/>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default BobaShop;
