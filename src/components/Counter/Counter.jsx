import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  //using State to control the counter for each employee
  const [counter, incrementCounter] = useState(0);
  return (
    <div className={styles.counterCard}>
      <p>Counter</p>
      {/* return current counter status */}
      <p>{counter}</p>
      <div>
        {/* Increase and decrease the counter */}
        <button onClick={() => incrementCounter(counter - 1)}>-</button>
        <button onClick={() => incrementCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
