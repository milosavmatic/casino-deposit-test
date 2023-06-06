import React from "react";
import styles from "./depositItem.module.scss";

const DepositItem = ({ title, amount }) => {
  return (
    <div>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};

export default DepositItem;
