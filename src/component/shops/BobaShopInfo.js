import Card from "../ui/Card";
import BobaDescription from "./BobaDescription";
import classes from "./BobaShopInfo.module.css";
import { useRef } from "react";
import axios from "axios";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BobaShopInfo(props) {
  const descriptionRef = useRef();
  const shopInfo = { ...props };
  let address = `https://maps.google.com/?q=${encodeURIComponent(
    props.address
  )}`;

  function submitHandler(event) {
    event.preventDefault();
    const inputedDescription = descriptionRef.current.value.trim();
    if (inputedDescription.length===0) return 
    const NewDescription = props.description.concat(inputedDescription);
    shopInfo.description = NewDescription;
    console.log(shopInfo)
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
        <div>
          <div className={classes.image}>
            <img src={props.image} alt={props.shopName} />
          </div>
          <div className={classes.content}>
            <h3>{props.shopName}</h3>
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
          </div>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <textarea
              required
              id="description"
              rows="4"
              ref={descriptionRef}
              placeholder="Add some review :)"
            />
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
