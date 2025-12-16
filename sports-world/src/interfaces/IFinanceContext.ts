import type { IFinance } from "./IFinance";

export interface IFinanceContext {
  financials: IFinance | null;
  fetchFinancials: () => void;
  requestLoan: (loanAmount: number) => void;
}