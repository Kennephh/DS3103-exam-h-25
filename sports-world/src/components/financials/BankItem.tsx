import { useState } from "react";
import { useFinanceContext } from "../../contexts/FinanceContext";
import Button from "../Button";

const BankItem = () => {
    const { financials, requestLoan } = useFinanceContext();
    const [loanAmount, setLoanAmount] = useState("");

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
            p-4
            bg-white
            rounded
            shadow-xl
            transition-all
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
                <Button variant="primary" onClick={handleBorrow}>Borrow</Button>
            
            </div>
        </article>
    );
};

export default BankItem;