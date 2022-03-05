import classes from "./BobaShop.module.css";
import Card from "../ui/Card";

function BobaShop(props) {
  return (
    <li className={classes.shop}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.shopName} />
        </div>
        <div>
          <h4 className={classes.shopName}>{props.shopName}</h4>
          <button className={classes.action}>Favorites</button>
        </div>
        <div className={classes.content}>
          <div>{props.bobaTeaName}</div>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}

export default BobaShop;
