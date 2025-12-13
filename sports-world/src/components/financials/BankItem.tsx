import { type IFinance } from "../../interfaces/IFinance";

export interface BankProps{
    financials: IFinance
}

const BankItem = ({financials} : BankProps) => {

    const buttonClasses = `
        bg-sky-600
        text-white
        px-3
        py-1
        rounded
        hover:bg-sky-700
        hover:cursor-pointer
    `;

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
                    <p>Debt: ?</p>
                </div>
                
                <div className="m-2 flex justify-end gap-2">
                    <input type="text"
                    placeholder="Enter loan amount..." 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
                    <button className={buttonClasses}>Borrow</button>
                </div>
    
            </article>
        );
}

export default BankItem;