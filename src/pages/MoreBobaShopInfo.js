import { useParams } from "react-router-dom";


function MoreBobaShopInfo(){
    let params = useParams();

    return (
        <h1>{params.shopId}</h1>
    )
}

export default MoreBobaShopInfo;