import { Link } from "react-router-dom"
import arena1 from "../assets/arena1.jpg"
import fighter1 from "../assets/fighter1.jpg"
import venue1 from "../assets/venue1.jpg"

const HomePage = () => {

    const linkClassNames = `
        p-4
        bg-black/40
        text-white
        rounded
        hover:bg-black/10
        flex flex-col
        justify-center
        items-center
        text-4xl
        font-semibold
        w-full h-full
        drop-shadow-lg
        tracking-wider
        transition-all
    `;

    const linkDivClassNames = `
        flex-1
        flex
        flex-col
        rounded
        border-2 border-black/75
        overflow-hidden
        hover:scale-105
        hover:border-sky-700
        transition-all
        hover:shadow-xl
    `;

    const bgStyle1 = {
        backgroundImage: `url(${arena1})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const bgStyle2 = {
        backgroundImage: `url(${fighter1})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const bgStyle3 = {
        backgroundImage: `url(${venue1})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 p-4">
            <div className={linkDivClassNames} style={bgStyle1}>
                <Link to="/athletes" className={linkClassNames}>🥋 Athletes</Link>
            </div>
            <div className={linkDivClassNames} style={bgStyle2}>
                <Link to="/finance" className={linkClassNames}>💰 Finance</Link>
            </div>
            <div className={linkDivClassNames} style={bgStyle3}>
                <Link to="/venues" className={linkClassNames}>🏟️ Venues</Link>
            </div>
        </div>
    )
}

export default HomePage