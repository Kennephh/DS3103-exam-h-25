import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import type { IFinance } from "../interfaces/IFinance";
import type { IFinanceContext } from "../interfaces/IFinanceContext";
import { getFinance, postFinance, putFinance } from "../services/financeService";
import { useAthleteContext } from "../contexts/AthleteContext";

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
     const {athletes} = useAthleteContext();

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
            const updated = await postFinance(newFinanceObject);
            if (updated) setFinancials(updated);
        } catch (error) {
            console.error("Failed to requestLoan:", error);
        }
    };

    const updateFinance = async (amount: number) => {
        const purchasedAthletes = athletes.filter(athlete => athlete.purchaseStatus === true).length;

        if (!financials) return;

        const updatedFinanceObject: IFinance = {
            ...financials,
            moneyLeft: financials.moneyLeft - amount,
            numberOfPurchases: purchasedAthletes,
            moneySpent: financials.moneySpent + amount,
        };

        try {
            const updated = await putFinance(updatedFinanceObject);
            if (updated) setFinancials(updated);
        } catch (error) {
            console.error("Failed to updateFinance", error);
        }
    };

    useEffect(() => {
        fetchFinancials();
    }, []);

    useEffect(() => {
    if (financials) {
        const purchasedAthletes = athletes.filter(athlete => athlete.purchaseStatus === true).length;
        const totalSpent = athletes.reduce((sum, athlete) => {
            return athlete.purchaseStatus ? sum + athlete.price : sum;
        }, 0);

        const newFinancials = {
            ...financials,
            numberOfPurchases: purchasedAthletes,
            moneySpent: totalSpent,
            moneyLeft: financials.moneyLeft - totalSpent,
        };

        if ( // Ensure it does not set if the values are unchanged
            newFinancials.numberOfPurchases !== financials.numberOfPurchases ||
            newFinancials.moneySpent !== financials.moneySpent ||
            newFinancials.moneyLeft !== financials.moneyLeft
        ) {
            setFinancials(newFinancials);
        }
    }
}, [athletes]);

    return (
        <FinanceContext.Provider value={{
            financials,
            fetchFinancials,
            requestLoan,
            updateFinance,
        }}>
            {children}
        </FinanceContext.Provider>
    );
};