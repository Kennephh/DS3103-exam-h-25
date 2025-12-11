import { type IFinance } from "../../interfaces/IFinance";
import {type IAthlete} from "../../interfaces/IAthlete";

export interface IFinanceProps{
    financials : IFinance // valgte å kalle det for financials da det skal representere flere økonomiske verdier
    athletes : IAthlete[]
}

const FinancialSituationItem = ({financials, athletes} : IFinanceProps) => {

    const countPurchasedAthletes = () => {
        return athletes.reduce((count, athlete) => {
            return count + (athlete.purchaseStatus ? 1 : 0);
        }, 0);
    }; // Summerer antall atleter som har purchaseStatus true

    return(
        <article className="
            h-full
            w-full
            p-4
            bg-white
            rounded
            shadow-xl
            hover:cursor-pointer
            hover:scale-102
            transition-all
        ">
            <div className="px-2 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Financial overview</h3>
                <p>Balance: {financials.moneyLeft}</p>
                <p>Expenditure: {financials.moneySpent}</p>
                <p>Athletes purchased: {countPurchasedAthletes()}</p>
            </div>
        </article>
    );
}

export default FinancialSituationItem;