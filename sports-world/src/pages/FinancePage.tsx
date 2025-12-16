import FinancialDashboardList from "../components/financials/FinancialDashboardList";
import { useEffect } from "react";
import AthleteList from "../components/athletes/AthleteList";
import { useFinanceContext } from "../contexts/FinanceContext";
import { useAthleteContext } from "../contexts/AthleteContext";

const FinancePageContent = () => {
    const {fetchFinancials } = useFinanceContext();
    const { athletes, getAthletes, editAthlete } = useAthleteContext();

    const handlePurchase = async (id: number) => {
        try {
            const athleteToUpdate = athletes.find(athlete => athlete.id === id);
            if (!athleteToUpdate) {
                alert("Athlete not found");
                return;
            }

            const updatedAthlete = { ...athleteToUpdate, purchaseStatus: true };
            await editAthlete(updatedAthlete);
            fetchFinancials();

        } catch (error) {
            alert("Error updating athlete purchase status");
        }
    };

    useEffect(() => {
        getAthletes();
    }, []);

    const notPurchasedAthletes = athletes.filter(athlete => athlete.purchaseStatus == false);

    return (
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <FinancialDashboardList/>
            <AthleteList athletes={notPurchasedAthletes} onPurchase={handlePurchase} />
        </div>
    );
};

export default FinancePageContent;