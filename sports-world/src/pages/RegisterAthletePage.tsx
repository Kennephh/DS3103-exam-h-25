import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAthleteById, uploadImage, createAthlete, updateAthlete } from "../services/athleteService";

const RegisterAthletePage = () => {

    const { id } = useParams();

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
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        } else {
            setImage(null);
        };
    };

    const navigate = useNavigate();

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
                await updateAthlete({ ...athleteToSave, id: parseInt(id)});
            } else {
                await createAthlete(athleteToSave);
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
                    <input type="text" value={athlete.name} onChange={handleNameChange} className="border p-2 w-full" />
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

                <button type={"submit"} className="bg-sky-600 text-white p-2 rounded hover:bg-sky-700" >Lagre</button>
            </form>

        </div>
    )
}

export default RegisterAthletePage