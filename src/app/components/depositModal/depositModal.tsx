import React, { Dispatch, SetStateAction } from "react";
import styles from "./depositModal.module.scss";
import CloseIcon from "../svg/closeIcon";
import ArrowRight from "../svg/arrowRight";
import DepositItem from "../depositItem/depositItem";
import { deposit } from "../../../../helpers/data";
import DepositDescription from "../depositDescription/depositDescriptionModal";

interface ChildProps {
  setDepositModal: Dispatch<SetStateAction<boolean>>;
  openDescriptionModal: boolean;
  setOpenDescriptionModal: Dispatch<SetStateAction<boolean>>;
}

const DepositModal: React.FC<ChildProps> = ({
  setDepositModal,
  openDescriptionModal,
  setOpenDescriptionModal,
}) => {
  return openDescriptionModal ? (
    <DepositDescription
      setOpenDescriptionModal={setOpenDescriptionModal}
      setDepositModal={setDepositModal}
    />
  ) : (
    <div className={styles.depositContainer}>
      <div className={styles.depositHeader}>
        <h4 className={styles.depositTitle}>Deposit Bonus</h4>
        <button type="button" onClick={() => setDepositModal(false)}>
          <CloseIcon />
        </button>
      </div>
      <button
        className={styles.depositBtn}
        onClick={() => setOpenDescriptionModal(true)}
      >
        Details <ArrowRight />
      </button>
      <div className={styles.circlePurple} />
      <div className={styles.circleBlue} />
      <div className={styles.circleRed} />
      {deposit.map((item) => (
        <DepositItem
          title={item.title}
          amount={item.amount}
          background={item.background}
          buttonColor={item.buttonColor}
          buttonLabel={item.buttonLabel}
        />
      ))}
    </div>
  );
};

export default DepositModal;
