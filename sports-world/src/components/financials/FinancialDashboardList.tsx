import FinancialSituationItem from "./FinancialSituationItem";
import BankItem from "./BankItem";
import {type IFinance } from "../../interfaces/IFinance";
import {type IAthlete } from "../../interfaces/IAthlete";
import type { FC } from "react";

interface FinancialDashboardListProps{
    financials : IFinance,
    athletes : IAthlete[]
}

const FinancialDashboardList : FC<FinancialDashboardListProps> = ({financials, athletes}) => {

    return(
        <section className="flex space-x-4">
            <div className="flex-1">
                <FinancialSituationItem financials={financials} athletes={athletes} />
            </div>
            <div className="flex-1">
                <BankItem financials={financials} />
            </div>
        </section>
    );
};
export default FinancialDashboardList;