import {useFinanceContext} from "../../contexts/FinanceContext";

const FinancialSituationItem = () => {
    const {financials} = useFinanceContext();

    if(financials){
    return(
        <article className="
            h-full
            w-full
            p-4
            bg-white
            rounded
            shadow-xl
            transition-all
        ">
            <div className="px-2 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Financial overview</h3>
                <p>Balance: {financials.moneyLeft}</p>
                <p>Expenditure: {financials.moneySpent}</p>
                <p>Athletes purchased: {financials.numberOfPurchases}</p>
            </div>
        </article>
    );
    };
}

export default FinancialSituationItem;