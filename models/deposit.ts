import { Amount } from "./amount";

export type Deposit = {
  title: string;
  amount: Amount;
  background: string;
  buttonColor?: string;
  buttonLabel?: string;
};
