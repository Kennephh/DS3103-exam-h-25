import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import type { IAthlete } from "../interfaces/IAthlete";
import { getAllAthletes, getAthleteByName, deleteAthlete, createAthlete, updateAthlete  } from "../services/athleteService";


interface AthleteContextType {
    athletes: IAthlete[];
    isLoading: boolean;
    error: string | null;
    getAthletes: (searchQuery?: string) => Promise<void>;
    removeAthlete: (id: number) => Promise<void>;
    addAthlete: (newAthlete: IAthlete) => Promise<void>;
    editAthlete: (athleteToUpdate: IAthlete) => Promise<void>;
}

const AthleteContext = createContext<AthleteContextType | null>(null);

export const useAthleteContext = () => {
    const context = useContext(AthleteContext);
    if (!context) {
        throw new Error("useAthleteContext must be used.");
    }
    return context;
}

export const AthleteProvider = ({ children }: {children: ReactNode}) => {

    const [athletes, setAthletes] = useState<IAthlete[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const startRequest = () => {
        setIsLoading(true);
        setError(null);
    }

    const getAthletes = async (searchQuery: string = "") => {
        startRequest();
        let data;

        try{
                    if (searchQuery){
            data = await getAthleteByName(searchQuery);
        } else {
            data = await getAllAthletes();
        }

        if (data) {
           const sortedData = data.sort((a, b) => (a.name || "").localeCompare(b.name || ""))
            setAthletes(sortedData);
        };
        } catch (error) {
            setError("Error while getting athletes.")
        } finally {
            setIsLoading(false);
        }
    };

    const removeAthlete = async (id: number) => {
        startRequest();

        try{
            await deleteAthlete(id);
            setAthletes(
                athletes.filter(athlete => athlete.id !== id)
            );
        } catch (error) {
            setError("Error while deleting athlete.");
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const addAthlete = async (newAthlete: IAthlete) => {
        startRequest();
        try {
          const createdAthlete = await createAthlete(newAthlete);
          if (createdAthlete) {
            setAthletes(prev => [...prev, createdAthlete]);
          };
        } catch (error) {
            setError("Error while adding athlete.");
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const editAthlete = async (athleteToUpdate: IAthlete) => {
        startRequest();
        try {
            await updateAthlete(athleteToUpdate);
            setAthletes(prev => prev.map(athlete => athlete.id === athleteToUpdate.id ? athleteToUpdate: athlete))
        } catch (error){
            setError("Error while updating athlete.");
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAthletes();
    }, []);


     return (
        <AthleteContext.Provider value={{
            athletes,
            isLoading,
            error,
            getAthletes,
            removeAthlete,
            addAthlete,
            editAthlete
        }}>
            {children}
        </AthleteContext.Provider>
    );

};