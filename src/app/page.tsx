"use client";
import { useState } from "react";
import PromotionContainer from "./components/promotion/promotionContainer";
import styles from "./page.module.scss";
import DepositModal from "./components/depositModal/depositModal";

export default function Home() {
  const [openDepositModal, setOpenDepositModal] = useState<boolean>(false);

  console.log("openDepositModal", openDepositModal);

  return (
    <main className={styles.mainContainer}>
      {openDepositModal ? (
        <DepositModal setDepositModal={setOpenDepositModal} />
      ) : (
        <PromotionContainer setDepositModal={setOpenDepositModal} />
      )}
    </main>
  );
}
