import classes from './NewBobaShopForm.module.css'
import Card from "../ui/Card";

function NewBobaShopForm() {
  return (
    <Card>
      <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="shopName">Shop Name</label>
            <input type='text' required id="shopName" name="shopName" />
        </div>
        <div className={classes.control}>
            <label htmlFor="bobaTeaName">Drink Name</label>
            <input type='text' required id="bobaTeaName" name="bobaTeaName" />
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Boba image</label>
            <input type='url' required id="image" name="image" placeholder='https://...'/>
        </div>
        <div className={classes.control}>
            <label htmlFor="shopAddress">Address</label>
            <input type='text' required id="shopAddress" name="shopAddress" />
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" name="description" rows='5'/>
        </div>
        <div className={classes.action}>
            <button type='button'>Add Boba Shop</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBobaShopForm;
