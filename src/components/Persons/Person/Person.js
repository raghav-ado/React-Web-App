import React from "react";
import styles from "./Person.module.css";

const person = (props) => {
  return (
    <div className={styles.Person}>
      <span>
        <span>Person - {props.count}</span>
        <span className={styles.cross} onClick={props.click}>
          &times;
        </span>
      </span>
      <p>
        Hello I'm <span className={styles.name}>{props.name}</span> and I am{" "}
        {props.age} years old
      </p>
      <p>{props.children}</p>
      <label>Edit Name:</label>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
