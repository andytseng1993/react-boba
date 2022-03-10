import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function MoreBobaShopInfo() {
  let params = useParams();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_FIREBASEAPI_URL}/${params.shopId}.json`
      )
      .then((res) => console.log(res.data));
  }, []);

  return <h1>{params.shopId}</h1>;
}

export default MoreBobaShopInfo;
