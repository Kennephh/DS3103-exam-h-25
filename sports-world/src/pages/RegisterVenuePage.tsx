import { useNavigate, useParams } from "react-router-dom";
import {type IVenue } from "../interfaces/IVenue";
import { useVenueContext } from "../contexts/VenueContext";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { API_PATHS } from "../config";
import Button from "../components/Button";


const RegisterVenuePage = () => {

    const { id } = useParams();
    const navigate =useNavigate();

    const {addVenue, editVenue, getVenueById, status} = useVenueContext();

    const [name, setName] = useState<string>("");
    const [capacity, setCapacity] = useState<number | string>("");
    const [existingImage, setExistingImage] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        if(id){
            const fetchVenues = async () => {
                const venueId = Number(id);
                const result = await getVenueById(venueId);
                if(result.success && 
                    result.data && 
                    !Array.isArray(result.data) && 
                    typeof result.data !== 'string'){

                    const venue = result.data as IVenue;
                    setName(venue.name ?? "")
                    setCapacity(venue.capacity ?? "")
                    setExistingImage(venue.image ?? "");
                } else{
                    alert("Error finding venue to edit.")
                    navigate("/venue");
                }
            };
            fetchVenues();
        }
    }, [id, navigate, getVenueById]);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setImage(e.target.files[0]);
        } else {
            setImage(null);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const venueData: IVenue = {
            id: id ? Number(id) : undefined,
            name: name,
            capacity: Number(capacity),
            image: existingImage
        };
        let result;
        if(id){
            result = await editVenue(venueData, image);
        } else{
            result = await addVenue(venueData, image);
        }
        if(result && result.success){
            navigate("/venues");
        }
    };





    return(
        <>
            <section className="container mx-auto p-4">
                <h2 className="text-2xl mb-4">{id ? "Edit Venue" : "Register New Venue"}</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)
                        } className="border p-2 w-full" />
                    </label>
                        
                        {/* 
                            Fikk hjelp av Gemini til å skrive denne koden.
                            Som gjør at det ikke skal være mulig å skrive inn -
                            bokstaver i Capacity-søkefeltet
                         */}
                    <label>
                        Capacity:
                        <input type="text" inputMode="numeric" pattern="[0-9]" value={capacity} onChange={(e) => {
                            const value = e.target.value
                            if(value === "" || /^\d+$/.test(value)) {
                                setCapacity(value)
                            }
                        }}
                           className="border p-2 w-full" />
                    </label>

                    <label>
                        Image:
                        {id && existingImage && (
                            <div>
                                <p>Current image: </p>
                                <img src={`${API_PATHS.IMAGES}/${existingImage}`} alt={name} />
                            </div>
                        )}
                        <input type="file"
                        onChange={handleImageUpload} 
                        className="border p-2 w-full" />
                    </label>
                    <Button type="submit"
                variant="primary"
                disabled={status.isSubmitting}
                className="py-2 w-full"
                >
                    {status.isSubmitting ? "Saving..." : (id ? "Update Venue" : "Create Venue")}
                </Button>

                {status.message && (
                <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-200 text-black px-4 py-3 rounded shadow-lg z-50 animate-bounce
                    ${status.type === "Error" ? "bg-red-200 text-red-800" : "bg-green-200 text-black"}`}>
                    {status.message}
                </div>
            )}
                
                </form>
                
            </section>

        </>
    )
}

export default RegisterVenuePage;