import { Deposit } from "../models/deposit";
import { Promotion } from "../models/promotion";
import { DepositPromotion } from "../models/depositPromotion";

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
      currency: "$",
    },
    background: "linear-gradient(171.43deg, #924FE7 6.25%, #6725BB 95.35%)",
    buttonColor: "#440298",
    buttonLabel: "CLAIM",
  },
  {
    title: "2nd deposit",
    amount: {
      value: 0,
      max: 4100,
      currency: "$",
    },
    background: "linear-gradient(171.43deg, #5681EE 6.25%, #163993 95.35%)",
    buttonColor: "#032784",
    buttonLabel: "DEPOSIT",
  },
  {
    title: "3rd deposit",
    amount: {
      value: 0,
      max: 0,
      currency: "$",
    },
    background: "linear-gradient(169.49deg, #1DC57C -3.51%, #145934 94.56%)",
    buttonColor: "#003B1C",
    buttonLabel: "DEPOSIT",
  },
  {
    title: "4th deposit",
    amount: {
      value: 0,
      max: 0,
      currency: "$",
    },
    background: " linear-gradient(351.88deg, #AA0508 3.93%, #F33A3D 92.07%)",
    buttonColor: "#7E0002",
    buttonLabel: "DEPOSIT",
  },
];

export const depositPromotion: DepositPromotion[] = [
  { label: "1st deposit max.$900 up to 200% real money bonus" },
  { label: "2nd deposit max. $2.100 up to 210%real money bonus" },
  { label: "3rd deposit max. $4.300 up to 220% real money bonus" },
  { label: "4th deposit max. $7.700 up to 270% real money bonus" },
];
