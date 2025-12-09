import { Link } from "react-router-dom"
import athlete from "../assets/athlete.webp"
import finance from "../assets/finance.webp"
import venue from "../assets/venue.webp"

const HomePage = () => {

    const linkClassNames = `
        p-4
        bg-black/60
        text-white
        rounded
        hover:bg-black/10
        flex flex-col
        justify-center
        items-center
        text-4xl
        font-semibold
        w-full h-full
        tracking-wider
        transition-all
        hover:scale-115
    `;

    const linkDivClassNames = `
        flex-1
        flex
        flex-col
        rounded
        overflow-hidden
        hover:scale-105
        transition-all
        hover:shadow-xl
    `;

    const bgStyle1 = {
        backgroundImage: `url(${athlete})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const bgStyle2 = {
        backgroundImage: `url(${finance})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const bgStyle3 = {
        backgroundImage: `url(${venue})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    return(
        <div className="container mx-auto h-[calc(100vh-4rem)] flex flex-col gap-4 py-4">
            <div className={linkDivClassNames} style={bgStyle1}>
                <Link to="/athletes" className={linkClassNames}>Athletes</Link>
            </div>
            <div className={linkDivClassNames} style={bgStyle2}>
                <Link to="/finance" className={linkClassNames}>Finance</Link>
            </div>
            <div className={linkDivClassNames} style={bgStyle3}>
                <Link to="/venues" className={linkClassNames}>Venues</Link>
            </div>
        </div>
    )
}

export default HomePage