import BobaShop from "./BobaShop";
import classes from "./BobaShopList.module.css";

function BobaShopList(props) {
  return (
    <ul className={classes.list}>
      {props.shops.map((shop) => (
        <BobaShop
          key={shop.id}
          id={shop.id}
          image={shop.image}
          shopName={shop.shopName}
          bobaTeaName={shop.bobaTeaName}
          address={shop.address}
          description={shop.description}
          favorite = {shop.favorite}
        />
      ))}
    </ul>
  );
}

export default BobaShopList;
