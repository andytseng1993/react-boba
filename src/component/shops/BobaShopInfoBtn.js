import { Link,Outlet } from "react-router-dom";
import classes from './BobaShopInfoBtn.module.css'


function BobaShopInfoBtn(props){
    return(
        <button className={classes.infobtn}> 
            <Link 
                to={`/moreinformation/${props.id}`}
                key={props.id}
                className={classes.link}
            >
            More Review
            </Link>
            <Outlet/>
        </button>

    )
}


export default BobaShopInfoBtn;