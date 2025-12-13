import { Link } from "react-router-dom";
import {type IAthlete } from "../interfaces/IAthlete";
import {type IFinance } from "../interfaces/IFinance";
import FinancialDashboardList from "../components/financials/FinancialDashboardList";
import { useEffect, useState } from "react";
import { getAllAthletes } from "../services/athleteService";
import AthleteList from "../components/AthleteList"


const FinancePage = () => {
    const [athletes, setAthletes] = useState<IAthlete[]>([]);
    
    const sampleFinancials: IFinance = {
    moneyLeft: 10000,
    moneySpent: 5000,
    numberOfPurchases: 200
    // Add other properties as defined in IFinance
};

    const fetchAthletes = async () => {
            try {
                const allAthletes = await getAllAthletes();
                // Filter athletes that are not purchased
                const notPurchasedAthletes = allAthletes.filter(athlete => athlete.purchaseStatus == false);
                setAthletes(notPurchasedAthletes);
            } catch (error) {
                console.error("Error fetching athletes, FinancePage", error);
            }
        };

         useEffect(() => {
        fetchAthletes();
    }, []);

    return(
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                <FinancialDashboardList financials={sampleFinancials} athletes={athletes}/>
                <AthleteList athletes={athletes} onDelete={() => {}} onEdit={() => {}} />
            </div>
        </>
    )
} 

export default FinancePage;