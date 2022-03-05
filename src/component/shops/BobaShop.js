import classes from "./BobaShop.module.css";
import Card from "../ui/Card";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BobaShop(props) {
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
              <FontAwesomeIcon className={classes.action} icon={faHeart} />
            </div>
            <div className={classes.bobaTeaName}>{props.bobaTeaName}</div>
            <address className={classes.address}>
              <FontAwesomeIcon
                className={classes.addressIcon}
                icon={faLocationDot}
              />
              {props.address}
            </address>
            <p className={classes.description}>
              &ldquo;{props.description}&rdquo;
            </p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default BobaShop;
