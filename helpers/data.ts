import { Deposit } from "../models/deposit";
import { Promotion } from "../models/promotion";

export const promotions: Promotion[] = [
  {
    title: "Rake Back",
    icon: "/images/rakeback-new-icon.svg",
  },
  {
    title: "Cach Back",
    icon: "/images/cashback-new-icon.svg",
  },
];

export const deposit: Deposit[] = [
  {
    title: "1st deposit",
    amount: {
      value: 700,
      max: 1800,
      currency: "USD",
    },
  },
  {
    title: "2nd deposit",
    amount: {
      value: 0,
      max: 4100,
      currency: "USD",
    },
  },
  {
    title: "3rd deposit",
    amount: {
      value: 0,
      max: 0,
      currency: "USD",
    },
  },
  {
    title: "4th deposit",
    amount: {
      value: 0,
      max: 0,
      currency: "USD",
    },
  },
];
