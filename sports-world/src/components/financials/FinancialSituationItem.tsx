import {useFinanceContext} from "../../contexts/FinanceContext";

const FinancialSituationItem = () => {
    const {financials} = useFinanceContext();

    if (!financials || financials.moneyLeft === undefined) {
        return null;
    }

    const isNegative = financials?.moneyLeft < 0;


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
                <p className={isNegative ? 'text-red-600 font-semibold mb-2' : ''}>
                    Balance: {financials.moneyLeft}
                </p>
                <p>Expenditure: {financials.moneySpent}</p>
                <p>Athletes purchased: {financials.numberOfPurchases}</p>
            </div>
        </article>
    );
    };
}

export default FinancialSituationItem;