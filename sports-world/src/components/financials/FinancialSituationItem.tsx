import { type IFinance } from "../../interfaces/IFinance";
import {type IAthlete} from "../../interfaces/IAthlete";
import { API_BASE_URL } from "../../config";

export interface IFinanceProps{
    financials : IFinance // valgte å kalle det for financials da det skal representere flere økonomiske verdier
}

const FinancialSituationItem = ({financials} : IFinanceProps) => {

    const buttonClasses = `
        bg-sky-600
        text-white
        px-3
        py-1
        rounded
        hover:bg-sky-700
        hover:cursor-pointer
    `;

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
            <section>
                <h3>Finacial overview</h3>
            </section>
        </article>
    );
}