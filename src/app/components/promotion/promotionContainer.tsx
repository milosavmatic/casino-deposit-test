import styles from "./promotion.module.scss";
import Image from "next/image";
import { promotions } from "../../../../helpers/data";
import { Promotion } from "../../../../models/promotion";
import Link from "next/link";
import FavoriteIcon from "../svg/favoriteIcon";
import React, { Dispatch, SetStateAction } from "react";

interface ChildProps {
  setDepositModal: Dispatch<SetStateAction<boolean>>;
  setOpenDescriptionModal: Dispatch<SetStateAction<boolean>>;
}

const PromotionContainer: React.FC<ChildProps> = ({
  setDepositModal,
  setOpenDescriptionModal,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.promotionContainer}>
        {promotions.map((promotion: Promotion, index: number) => {
          return (
            <button key={index} className={styles.promotion}>
              <div className={styles.promotionTitle}>{promotion.title}</div>
              <Image
                src={promotion.icon}
                width={41}
                height={47}
                alt="promotion"
                className={styles.promotionIcon}
                priority={true}
              />
            </button>
          );
        })}
      </div>
      <button
        className={styles.depositBonusContainer}
        onClick={() => {
          setDepositModal(true);
          setOpenDescriptionModal(false);
        }}
      >
        <div className={styles.depositBonusTitle}>
          Deposit <span className={styles.depositBonusTitleSpan}> Bonus</span>
        </div>
        <Image
          src="/images/deposit-bonus-icon.webp"
          width={54}
          height={54}
          alt="deposit bonus"
          className={styles.depositBonusIcon}
          priority={true}
        />
      </button>
      <Link href={"/"} className={styles.item}>
        <FavoriteIcon />
        Favourites
      </Link>
      <Link href={"/"} className={styles.item}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24"
          height="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H4V4h12v16zM9 10h6v2H9v-2zm0 4h6v2H9v-2z" />
        </svg>
        Recent
      </Link>
    </div>
  );
};

export default PromotionContainer;
