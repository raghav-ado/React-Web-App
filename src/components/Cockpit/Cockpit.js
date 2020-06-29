import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  const classes = [styles.default];
  const toggleBtn = document.getElementById("toggle-btn");
  let btnClass = "";
  let btnText = "Show Persons";

  if (props.showPersons) {
    btnClass = styles.Red;
    btnText = "Hide Persons";
  }

  if (props.persons.length <= 2) {
    classes.pop(styles.default);
    classes.push(styles.yellow);
  }
  if (props.persons.length === 1) {
    classes.push(styles.bold);
  }

  if (props.persons.length < 1) {
    classes.pop(styles.yellow);
    classes.push(styles.red, styles.bold);
    toggleBtn.remove();
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>
        No. of Persons - {props.persons.length}
      </p>
      <button id="toggle-btn" className={btnClass} onClick={props.clicked}>
        {btnText}
      </button>
    </div>
  );
};

export default cockpit;
