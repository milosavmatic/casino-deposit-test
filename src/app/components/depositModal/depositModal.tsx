import React, { Dispatch, SetStateAction } from "react";
import styles from "./depositModal.module.scss";
import CloseIcon from "../svg/closeIcon";
import ArrowRight from "../svg/arrowRight";

interface ChildProps {
  setDepositModal: Dispatch<SetStateAction<boolean>>;
}

const DepositModal: React.FC<ChildProps> = ({ setDepositModal }) => {
  return (
    <div className={styles.depositContainer}>
      <div className={styles.depositHeader}>
        <h4 className={styles.depositTitle}>Deposit Bonus</h4>
        <button type="button" onClick={() => setDepositModal(false)}>
          <CloseIcon />
        </button>
      </div>
      <button className={styles.depositBtn}>
        Details <ArrowRight />
      </button>
    </div>
  );
};

export default DepositModal;
