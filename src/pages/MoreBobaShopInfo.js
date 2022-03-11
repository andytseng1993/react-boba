import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BobaShopInfo from "../component/shops/BobaShopInfo";

function MoreBobaShopInfo() {
  const [loadedInfo, setLoadedInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate()
  
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  function getData() {
    axios
      .get(`${process.env.REACT_APP_FIREBASEAPI_URL}/${params.shopId}.json`)
      .then((res) => {
        if(res.data===null) return navigate('/')
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
        fresh={getData}
      />
    </section>
  );
}

export default MoreBobaShopInfo;
