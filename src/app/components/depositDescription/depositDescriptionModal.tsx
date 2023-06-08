import React, { Dispatch, SetStateAction } from "react";
import styles from "./despositDescriptionModal.module.scss";
import CloseIcon from "../svg/closeIcon";
import { DepositPromotion } from "../../../../models/depositPromotion";
import { depositPromotion } from "../../../../helpers/data";
import ArrowLeft from "../svg/arrowLeft";

interface ChildProps {
  setOpenDescriptionModal: Dispatch<SetStateAction<boolean>>;
  setDepositModal: Dispatch<SetStateAction<boolean>>;
}

const DepositDescription: React.FC<ChildProps> = ({
  setOpenDescriptionModal,
  setDepositModal,
}) => {
  return (
    <div className={styles.descriptionModuleContainer}>
      <div className={styles.depositHeader}>
        <div className={styles.titleContainer}>
          <button
            onClick={() => setOpenDescriptionModal(false)}
            className={styles.buttonBack}
          >
            <ArrowLeft />
          </button>
          <h4 className={styles.depositTitle}>Deposit Bonus</h4>
        </div>
        <button type="button" onClick={() => setDepositModal(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.text}>
          <span>Up to 270% Guaranteed Welcome Bonus </span> With Your First 4
          Deposits | No Betting Limits, Wagering with deposit Funds!{" "}
        </p>
        {depositPromotion.map((item: DepositPromotion) => (
          <ul className={styles.list}>
            <li>{item.label}</li>
          </ul>
        ))}
        <p className={styles.text}>
          The Bonus money is guaranteed to be transferred as real money after
          the wagering requirement is met. Deposit $30 or more for each stage to
          claim. <br />
          <br />
          Wagering with deposit funds only, multiple deposits are allowed. No
          bet limits. Bonus percentage and max. deposit amount increases after
          each of the first 4 deposits, max. $15.000.
          <br />
          <br /> The sum of the first 4 deposits is the base for the total
          welcome bonus amount. Wager the sum to receive the accrued bonus in
          cash with no extra conditions attached. Unlimited cash deposits are
          allowed to complete the wagering requirement.
          <br />
          <br /> The deposit balance and any winnings from your deposits can be
          withdrawn at any time after your deposits have been wagered at least
          once (wager x1). Bonus stays active even once a withdrawal is
          submitted.
          <br />
          <br /> No expiry on the bonus funds, every deposit and gameplay will
          contribute to the wagering until it is completed, even after the 4th
          deposit!
        </p>
      </div>
    </div>
  );
};

export default DepositDescription;
