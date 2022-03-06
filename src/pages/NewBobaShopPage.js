import NewBobaShopForm from "../component/shops/NewBobaShopForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBobaShopPage() {
  const navigate = useNavigate();
  function handleAddShop(shopsData) {
    axios
      .post(
        `${process.env.REACT_APP_FIREBASEAPI_URL}`,
        shopsData
      )
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <section>
      <h1>Add New Boba Shop</h1>
      <section>
        <NewBobaShopForm onAddShop={handleAddShop} />
      </section>
    </section>
  );
}

export default NewBobaShopPage;
