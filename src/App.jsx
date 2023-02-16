import React from "react";
import styles from "./App.module.scss";
import team from "./data/team";
import Employee from "./components/Employee";

const App = () => {
  //create a function that returns a react component for more streamlined coding
  const getAllEmployees = (team) => <Employee team={team} key={team.id} />;

  return (
    <div className={styles.ticketTracker}>
      <h1>Ticket Tracker</h1>
      {/* import an employee component per person in the array*/}
      <section>{team.map(getAllEmployees)}</section>
    </div>
  );
};

export default App;
