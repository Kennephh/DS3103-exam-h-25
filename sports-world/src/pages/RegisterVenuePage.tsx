import {type IVenue } from "../interfaces/IVenue";
import useVenuesActions from "../hooks/useVenuesActions";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, type FormEvent } from "react";
import VenueService from "../services/VenueService";


const RegisterVenuePage = () => {

    const {addVenue, editVenue, deleteVenue, status} = useVenuesActions();

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [capacity, setCapacity] = useState<number>(0);
    const [existingImage, setExistingImage] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);


    useEffect(() => {
        if(id) {
            const fetchVenues = async () => {
                const result = await VenueService.getVenueById(Number(id));
                if(result.success){
                    const venue = result.data as IVenue;
                    setName(venue.name);
                    setCapacity(venue.capacity);
                    setExistingImage(venue.image || "");
                }
            };
            fetchVenues();
        }
    }, [id]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault

        const venueData: IVenue = {
            id: id ? Number(id) : undefined,
            name,
            capacity,
            image: existingImage
        };

        const action = id ? editVenue : addVenue;

        const result = await action(venueData, image)

    }




    return(
        <>
            <section className="container mx-auto p-4">

                <h2 className="text-2xl mb-4">{id ? "Edit Venue" : "Add Venue"}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                    
                    <label>Name</label>
                    <input type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className="border p-2 w-full rounded" required />

                    <label>Capacity</label>
                    <input type="number" 
                    value={capacity} 
                    onChange={e => setCapacity(Number(e.target.value))} 
                    className="border p-2 w-full rounded" required />

                    <label>Image</label>
                    <input type="file" 
                    value={name} 
                    onChange={e => setImage(e.target.files?.[0] || null)} 
                    className="border p-2 w-full rounded" required />
                    
                </form>

            </section>


        </>
    )
}

export default RegisterVenuePage;