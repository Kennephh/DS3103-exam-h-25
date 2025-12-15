import { useState } from "react";
import { useFinanceContext } from "../../contexts/FinanceContext";

const BankItem = () => {
    const { financials, requestLoan } = useFinanceContext();
    const [loanAmount, setLoanAmount] = useState("");

    const buttonClasses = `
        bg-sky-600
        text-white
        px-3
        py-1
        rounded
        hover:bg-sky-700
        hover:cursor-pointer
        disabled:bg-gray-400
        disabled:cursor-not-allowed
    `;

    const handleBorrow = () => {
        const amount = parseInt(loanAmount);
        
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid loan amount");
            return;
        }

        requestLoan(amount);
        setLoanAmount("");
    };

    if (!financials) {
        return <div>Loading financial data...</div>;
    }

    return (
        <article className="
            h-full
            w-full
            bg-white
            rounded
            shadow-xl
            transition-all
            overflow-hidden
        ">
            <div className="px-2 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">SportBank</h3> 
                 
            </div>
            
            <div className="m-2 flex justify-end gap-2">
                <input 
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter loan amount..." 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    min="0"
                />
                <button className={buttonClasses} onClick={handleBorrow}>Borrow</button>
            </div>
        </article>
    );
};

export default BankItem;