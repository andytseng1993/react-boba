import { Link,Outlet } from "react-router-dom";


function BobaShopInfo(props){
    return(
        <button> 
            <Link
                to={`/moreinformation/${props.id}`}
                key={props.id}
            >
            more Information
            </Link>
            <Outlet/>
        </button>

    )
}


export default BobaShopInfo;