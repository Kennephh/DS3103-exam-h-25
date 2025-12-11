import { Link } from "react-router-dom";
import {type IAthlete } from "../interfaces/IAthlete";
import {type IFinance } from "../interfaces/IFinance";
import FinancialDashboardList from "../components/financials/FinancialDashboardList";
import { useEffect, useState } from "react";


const FinancePage = () => {
    const [athletes, setAThletes] = useState<IAthlete[]>([]);
    
    const sampleFinancials: IFinance = {
    moneyLeft: 10000,
    moneySpent: 5000,
    numberOfPurchases: 200
    // Add other properties as defined in IFinance
};

const sampleAthlete: IAthlete = {
    id: 4444444,
    name: "Bird Shit",
    gender : "Woman",
    price: 2,
    image: "kkkkkkkkk",
    purchaseStatus: false
}
    return(
        <>
            <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
                <FinancialDashboardList financials={sampleFinancials} athletes={athletes}/>
            </div>
        </>
    )
} 

export default FinancePage;