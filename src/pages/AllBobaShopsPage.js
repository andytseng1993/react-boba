import axios from "axios";
import BobaShopList from "../component/shops/BobaShopList";
import { useEffect, useState } from "react";


function AllBobaShopsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedShops, setLoadedShops] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_FIREBASEAPI_URL}`)
      .then((res) => {
        const bobashops = []
        for (let key in res.data){
          const bobashop ={
            id:key,
            ...res.data[key]
          }
          bobashops.push(bobashop)
        }
        setLoadedShops(bobashops);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

if(isLoading){
  return (
    <section>
      <h1>All Boba Shops</h1>
      <p>Loading...</p>
    </section>
  );
}

  return (
    <section>
      <h1>All Boba Shops</h1>
      <BobaShopList shops={loadedShops} />
    </section>
  );
}

export default AllBobaShopsPage;
