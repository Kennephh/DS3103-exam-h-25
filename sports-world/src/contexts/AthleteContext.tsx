import { createContext, useState, useEffect, useContext } from "react";
import type { IAthlete } from "../interfaces/IAthlete";
import { getAllAthletes, getAthleteByName, deleteAthlete } from "../services/athleteService";

interface AthleteContextType {
    athletes: IAthlete[];
    getAthletes: (searchQuery?: string) => Promise<void>;
    removeAthlete: (id: number) => Promise<void>;
}