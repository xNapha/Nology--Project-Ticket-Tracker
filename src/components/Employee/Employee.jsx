import React from "react";
import styles from "./Employee.module.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {
  // assign values for constants needed throughout the component
  const { name, role } = props.team;
  return (
    <div className={styles.employeeCard}>
      <h2>{name}</h2>
      <p>{role}</p>
      {/* import a counter component for each employee */}
      <Counter />
    </div>
  );
};

export default Employee;
