import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import type { IFinance } from "../interfaces/IFinance";
import type { IFinanceContext } from "../interfaces/IFinanceContext";
import { getFinance, putFinance } from "../services/financeService";

const FinanceContext = createContext<IFinanceContext | null>(null);

export const useFinanceContext = () => {
    const context = useContext(FinanceContext);
    if (!context) {
        throw new Error("useFinanceContext must be used within a FinanceProvider");
    }
    return context;
};

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
    const [financials, setFinancials] = useState<IFinance | null>(null);

    const fetchFinancials = async () => {
        try {
            const data = await getFinance();
            if (data) {
                setFinancials(data);
            }
        } catch (error) {
            console.error("Failed to fetchFinancials", error);
        }
    };

    const requestLoan = async (loanAmount: number) => {
        if (!financials) return;

        const newFinanceObject: IFinance = {
            ...financials,
            moneyLeft: financials.moneyLeft + loanAmount,
        };

        try {
            const updated = await putFinance(newFinanceObject);
            if (updated) setFinancials(updated);
        } catch (error) {
            console.error("Failed to requestLoan:", error);
        }
    };

    useEffect(() => {
        fetchFinancials();
    }, []);


    return (
        <FinanceContext.Provider value={{
            financials,
            fetchFinancials,
            requestLoan
        }}>
            {children}
        </FinanceContext.Provider>
    );
};