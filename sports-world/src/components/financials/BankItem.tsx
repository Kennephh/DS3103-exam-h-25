import { useState } from "react";
import { useFinanceContext } from "../../contexts/FinanceContext";
import Button from "../Button";

const BankItem = () => {
    const {requestLoan } = useFinanceContext();
    const [loanAmount, setLoanAmount] = useState("");
    const [error, setError] = useState(false);
    const [invalidAmount, setInvalidAmount] = useState(false);
    const MAX_LOAN_AMOUNT = 99999999;

    const handleBorrow = () => {
        const amount = Number(loanAmount);

        if (isNaN(amount) || amount <= 0) {
            setInvalidAmount(true);
            setError(false);
            setTimeout(() => setInvalidAmount(false), 3000);
            return;
        }

        if (amount > MAX_LOAN_AMOUNT) {
            setError(true);
            setInvalidAmount(false);
            setTimeout(() => setError(false), 3000);
            return;
        }

        requestLoan(amount);
        setLoanAmount("");
    };

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

            <div className="m-2 flex flex-row justify-end gap-2 relative">
                {invalidAmount && (
                    <span className="absolute -top-5 left-0 text-red-700 text-sm">
                        Please enter a valid number
                    </span>
                )}
                {error && (
                    <span className="absolute -top-5 left-0 text-red-700 text-sm">
                        The amount is too high
                    </span>
                )}
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter loan amount..."
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ${error || invalidAmount ? 'border-red-500' : ''}`}
                    min="0"
                />
                <Button variant="primary" onClick={handleBorrow}>Borrow</Button>
            </div>
        </article>
    );
};;

export default BankItem;