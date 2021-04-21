import React from "react";
import styles from "../styles/Menu.module.css";

const Menu: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>Dropdown</button>
      <div className={styles.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};
export default Menu;
