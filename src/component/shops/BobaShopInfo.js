import Card from "../ui/Card";
import BobaDescription from "./BobaDescription";
import classes from "./BobaShopInfo.module.css";
import { useRef } from "react";
import axios from "axios";

function BobaShopInfo(props) {
  const descriptionRef = useRef();
  const shopInfo = { ...props };
  let address = `https://maps.google.com/?q=${encodeURIComponent(props.address)}`
  console.log(address);
  
  function submitHandler(event) {
    event.preventDefault();
    const inputedDescription = descriptionRef.current.value.trim();
    const NewDescription = props.description.concat(inputedDescription);
    shopInfo.description = NewDescription;
    axios
      .get(`${process.env.REACT_APP_FIREBASEAPI_URL}/${props.id}/favorite.json`)
      .then((res) => {
        shopInfo.favorite = res.data;
        props.onAddDescription(shopInfo);
        descriptionRef.current.value = "";
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Card>
        <div className={classes.row}>
          <div className={classes.image}>
            <img src={props.image} alt={props.shopName} />
          </div>
          <div className={classes.content}>
            <div className={classes.shopTitle}>
              <h4 className={classes.shopName}>{props.shopName}</h4>
              <div className={classes.favorite}></div>
            </div>
            <div className={classes.bobaTeaName}>{props.bobaTeaName}</div>
            <a className={classes.address} href={address} target="_blank" rel="noopener noreferrer" >{props.address}</a>
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <textarea required id="description" rows="3" ref={descriptionRef} />
          </div>
          <div className={classes.action}>
            <button>Post Review</button>
          </div>
        </form>
      </Card>

      {props.description.map((des, index) => {
        if (des === null) return;
        return (
          <Card key={index}>
            <BobaDescription description={des} key={index} />
          </Card>
        );
      })}
    </>
  );
}

export default BobaShopInfo;
