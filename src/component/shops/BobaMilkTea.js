import classes from "./BobaMilkTea.module.css";

function BobaMilkTea() {
  return (
    <div className={classes.drink}>
      <div className={classes.straw}></div>
      <div className={classes.top}>
        <div className={classes.ice}></div>
        <div className={classes.ice}></div>
      </div>
      <div className={classes.cup}>
        <div className={classes.brownsugar1}></div>
        <div className={classes.brownsugar2}></div>
        <div className={classes.brownsugar3}></div>
        <div className={classes.milktea}></div>
        <div className={classes.milktea2}></div>
        <div className={classes.milktea3}></div>
        <div className={classes.milktea4}></div>
        <div className={classes.allboba}>
          {[...Array(11)].map((x,i)=>
              <div className={classes.boba} key={i} style={{'--i':{i}}}></div>
          )}
        </div>
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
}

export default BobaMilkTea;
