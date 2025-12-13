import { Link, useNavigate } from "react-router-dom"
import {type IAthlete } from "../interfaces/IAthlete";
import {type IFinance } from "../interfaces/IFinance";
import FinancialDashboardList from "../components/financials/FinancialDashboardList";
import { useEffect, useState } from "react";
import { getAllAthletes } from "../services/athleteService";
import AthleteList from "../components/AthleteList"


const FinancePage = () => {
    const [athletes, setAthletes] = useState<IAthlete[]>([]);
    
    const sampleFinancials: IFinance = {
    moneyLeft: 120000000,
    moneySpent: 0,
    numberOfPurchases: 200
};

     const navigate = useNavigate();

    const handlePurchase = async (id: number) => {
        navigate(`/edit-athlete/${id}`);
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
                <AthleteList athletes={athletes} onPurchase={handlePurchase}/>
            </div>
        </>
    )
} 

export default FinancePage;