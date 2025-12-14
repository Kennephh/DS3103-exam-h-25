import {type IAthlete } from "../interfaces/IAthlete";
import {type IFinance } from "../interfaces/IFinance";
import FinancialDashboardList from "../components/financials/FinancialDashboardList";
import { useEffect, useState } from "react";
import { getAllAthletes, updateAthlete  } from "../services/athleteService";
import {} from "../services/financeService";
import AthleteList from "../components/athletes/AthleteList";


const FinancePage = () => {
    const [athletes, setAthletes] = useState<IAthlete[]>([]);

    const sampleFinancials: IFinance = {
    moneyLeft: 120000000,
    moneySpent: 0,
    numberOfPurchases: 200
};

    const handlePurchase = async (id: number) => {

        try {
            const athleteToUpdate = athletes.find(athlete => athlete.id === id);
            if (!athleteToUpdate) {
                alert("Athlete not found");
                return;
            }

            const updatedAthlete = { ...athleteToUpdate, purchaseStatus: true };

            await updateAthlete(updatedAthlete);

            setAthletes(prevAthletes =>
                prevAthletes.map(athlete =>
                    athlete.id === id ? updatedAthlete : athlete
                )
            );
        } catch (error) {
            alert("Error updating athlete purchase status");
        }

    };

    const fetchAthletes = async () => {
            try {
                const allAthletes = await getAllAthletes();
                // Filter athletes that are not purchased
                const notPurchasedAthletes = allAthletes.filter(athlete => athlete.purchaseStatus == false);
                setAthletes(notPurchasedAthletes);
            } catch (error) {
                alert("Error fetching athletes, FinancePage");
            }
        };

         useEffect(() => {
        fetchAthletes();
    }, []);

    return(
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                <FinancialDashboardList financials={sampleFinancials} athletes={athletes}/>
                <AthleteList athletes={athletes} onPurchase={handlePurchase}/>
            </div>
        </>
    )
}

export default FinancePage;