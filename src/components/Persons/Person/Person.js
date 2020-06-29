import React from "react";
import styles from "./Person.module.css";

const person = (props) => {
  return (
    <div className={styles.Person}>
      <span>PP - {props.count}</span>
      <span className={styles.cross} onClick={props.click}>
        &times;
      </span>
      <p>
        Hello I'm {props.name} and I am {props.age} years old
      </p>
      <p>My pp size is {props.pp}.</p>
      <p>{props.children}</p>
      <label>Enter desired PP size:</label>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
