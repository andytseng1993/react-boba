import classes from "./NewBobaShopForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewBobaShopForm(props) {
  const shopNameRef = useRef();
  const bobaTeaNameRef = useRef();
  const imageRef = useRef();
  const shopAddressRef = useRef();
  const descriptionRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const inputedShopName = shopNameRef.current.value.trim();
    const inputedBobaTeaName = bobaTeaNameRef.current.value.trim();
    const inputedImage = imageRef.current.value.trim();
    const inputedAddress = shopAddressRef.current.value.trim();
    const inputedDescription = descriptionRef.current.value.trim();
    let arrayDescription = []
    arrayDescription.push(inputedDescription)

    const shopsData = {
      shopName: inputedShopName,
      bobaTeaName: inputedBobaTeaName,
      image: inputedImage,
      address: inputedAddress,
      description: arrayDescription,
      favorite: 1,
    };

    props.onAddShop(shopsData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="shopName">Shop Name</label>
          <input type="text" required id="shopName" ref={shopNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="bobaTeaName">Drink Name</label>
          <input type="text" required id="bobaTeaName" ref={bobaTeaNameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Boba image</label>
          <input
            type="url"
            required
            id="image"
            placeholder="https://..."
            ref={imageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="shopAddress">Address</label>
          <input type="text" required id="shopAddress" ref={shopAddressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" ref={descriptionRef} />
        </div>
        <div className={classes.action}>
          <button>Add Boba Shop</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBobaShopForm;
