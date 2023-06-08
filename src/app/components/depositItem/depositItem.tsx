import React from "react";
import styles from "./depositItem.module.scss";
import { Amount } from "../../../../models/amount";

type DepositItemProps = {
  title: string;
  amount: Amount;
  background: string;
  buttonColor?: string;
  buttonLabel: string | undefined;
};

const zero = 0;

const DepositItem: React.FC<DepositItemProps> = ({
  title,
  amount,
  background,
  buttonColor,
  buttonLabel,
}) => {
  return (
    <div
      className={`${styles.depositItemContainer} ${
        title === "3rd deposit" || title === "4th deposit" ? styles.opacity : ""
      }`}
      style={{ background: background }}
    >
      <div className={styles.depositItem} />
      <h5 className={styles.title}>{title}</h5>

      <div className={styles.amountContainer}>
        <div className={styles.progressContainer}>
          <label className={styles.labelAmount}>
            Bonus amount:{" "}
            <span className={styles.amount}>
              {amount.currency}
              {amount.value} / {amount.currency}
              {amount.max}
            </span>
          </label>
          <div className={styles.progress}>
            <progress
              id="file"
              value={(amount.value / amount.max) * 100}
              max="100"
            ></progress>
            <span className={styles.progressValue}>
              {isNaN((amount.value / amount.max) * 100)
                ? zero.toFixed(2)
                : ((amount.value / amount.max) * 100).toFixed(2)}
              %
            </span>
          </div>
        </div>

        <button
          className={styles.depositBtn}
          style={{ background: buttonColor }}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default DepositItem;
