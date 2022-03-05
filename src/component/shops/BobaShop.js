import classes from './BobaShop.module.css';

function BobaShop(props) {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.shopName} />
      </div>
      <div>
        <h4>{props.shopName}</h4>
        <botton>Favorites</botton>
      </div>
      <div>
        <div>{props.bobaTeaName}</div>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default BobaShop;
