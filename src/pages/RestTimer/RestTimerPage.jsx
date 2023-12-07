import React from "react";
import Timer from "../../components/Timer/Timer";
import classes from "./RestTimer.module.css"

const RestTimerPage = () => {
  return (
    <div className={classes.container}>
      <h3>Control your rest time</h3>
      <Timer />
    </div>
  );
};

export default RestTimerPage;
