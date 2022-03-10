import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BobaShopInfo from "../component/shops/BobaShopInfo";

function MoreBobaShopInfo() {
  const [loadedInfo, setLoadedInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  function AddDescription(shopData){
    axios
      .put(
        `${process.env.REACT_APP_FIREBASEAPI_URL}/${shopData.id}.json`,
        shopData
      )
      .then(()=> {
        getData()
        alert('Add a review :)')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getData() {
    axios
      .get(`${process.env.REACT_APP_FIREBASEAPI_URL}/${params.shopId}.json`)
      .then((res) => {
        setLoadedInfo({...res.data});
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  if (isLoading) {
    return (
      <section>
        <h1 style={{textAlign:'center'}}>More Information</h1>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1 style={{textAlign:'center'}}>More Information</h1>
      <BobaShopInfo
        id={params.shopId}
        image={loadedInfo.image}
        shopName={loadedInfo.shopName}
        bobaTeaName={loadedInfo.bobaTeaName}
        address={loadedInfo.address}
        description={loadedInfo.description}
        favorite = {loadedInfo.favorite}
        onAddDescription = {AddDescription}
      />
    </section>
  );
}

export default MoreBobaShopInfo;
