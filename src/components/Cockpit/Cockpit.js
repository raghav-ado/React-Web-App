import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  const classes = [styles.default];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.pop(styles.default);
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>No. of PPs - {props.persons.length}</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle PPs
      </button>
    </div>
  );
};

export default cockpit;
