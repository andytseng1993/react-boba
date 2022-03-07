import { useState, useEffect,useRef } from "react";
import classes from "./BobaDescription.module.css";

function BobaDescription(props) {
    const [description, setDescription] = useState(props.description);
    const isTooLong = useRef(false);
    const lessDescription = useRef(true);

    function shortDep(description) {
        return description.split(" ").slice(0, 50).join(" ");
    }
    function moreHandler() {
        lessDescription.current =false;
        setDescription(props.description);
    }
    function lessHandler() {
        setDescription(shortDep(description) + "...");
        lessDescription.current =true;
    }
    useEffect(() => {
        if (description.length > 295) {
            isTooLong.current=true;
            setDescription(shortDep(description) + "...");
        } else return;
    }, []);

    return (
        <div className={classes.content}>
            <p
                className={
                    isTooLong.current ? classes.longDescription : classes.description
                }
            >
                &ldquo;{description}&rdquo;
            </p>
            {isTooLong.current ? (
                lessDescription.current ? (
                    <button className={classes.action} onClick={moreHandler}>
                        Read more
                        <span className={classes.more} />
                    </button>
                ) : (
                    <button className={classes.action} onClick={lessHandler}>
                        <span className={classes.less} />
                        Read less
                    </button>
                )
            ) : (
                ""
            )}
        </div>
    );
}

export default BobaDescription;
