import FinancialSituationItem from "./FinancialSituationItem";
import BankItem from "./BankItem";

const FinancialDashboardList: React.FC  = () => {
    return(
        // DETTE SER KNOTETE UT PÅ TELEFON, 
        <section className="flex space-x-4">
            <div className="flex-1">
                <FinancialSituationItem/>
            </div>
            <div className="flex-1">
                <BankItem/>
            </div>
        </section>
    );
};
export default FinancialDashboardList;