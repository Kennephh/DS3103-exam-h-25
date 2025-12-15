import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAthleteById, uploadImage } from "../services/athleteService";
import { useAthleteContext } from "../contexts/AthleteContext";

const RegisterAthletePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { addAthlete, editAthlete, isLoading} = useAthleteContext();

    const [athlete, setAthlete] = useState({
        name: "",
        gender: "",
        price: 0,
        image: "",
        purchaseStatus: false
    });

    const [image, setImage] = useState<File | null>(null);

    useEffect( () => {
        if (id) {
            getAthleteById(parseInt(id)).then(data => {
                if (data) {
                    setAthlete(data);
                }
            })
        }
    }, [id] );

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAthlete({ ...athlete, name: event.target.value});
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setAthlete({ ...athlete, gender: event.target.value});
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAthlete({ ...athlete, price: parseInt(event.target.value)});
    };

    const handlePurchaseStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAthlete({ ...athlete, purchaseStatus: event.target.checked});
        console.log(athlete.purchaseStatus, "handlePurchaseStatusChange")
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        } else {
            setImage(null);
        };
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        let imagePath = athlete.image;

        if (image) {
            try{
                const uploadedPath = await uploadImage(image);
                if (uploadedPath) {
                    imagePath = uploadedPath;
                }
            } catch (error) {
                alert("Feil ved opplasting av bilde.");
                return;
            };
        };

        const athleteToSave = { ...athlete, image: imagePath};
        try{
            if (id) {
                await editAthlete({ ...athleteToSave, id: parseInt(id)});
            } else {
                await addAthlete(athleteToSave);
            };
            navigate("/athletes");
        } catch(error){
            alert("Feil ved lagring av atlet");
        }
    };

    return(
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">{id ? "Edit Athlete" : "Register New Athlete"}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <label>
                    Name:
                    <input type="text" required={true} value={athlete.name} onChange={handleNameChange} className="border p-2 w-full" />
                </label>

                <label>
                    Gender:
                    <select value={athlete.gender} onChange={handleGenderChange} className="border p-2 w-full" >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>
                    Price:
                    <input type="number" value={athlete.price} onChange={handlePriceChange} className="border p-2 w-full" />
                </label>

                <label htmlFor="purchaseStatusCheckBox" className="flex items-center gap-2">
                    <input type="checkbox" id="purchaseStatusCheckBox" checked={athlete.purchaseStatus} onChange={handlePurchaseStatusChange} />
                    Purchased
                </label>

                <label>
                    Image:
                    <input type="file" onChange={handleImageChange} className="border p-2 w-full" />
                </label>

                <button
                    type={"submit"}
                    disabled={isLoading}
                    className={`bg-sky-600 text-white p-2 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-sky-700'}`} >{isLoading ? "Saving..." : "Lagre"}</button>
            </form>

        </div>
    )
}

export default RegisterAthletePage