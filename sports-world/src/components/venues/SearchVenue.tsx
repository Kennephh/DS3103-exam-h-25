
export interface IVenueSearchProps{
    onSearch: (search: string) => void;
}

const SearchVenue = ({onSearch}: IVenueSearchProps) => {
    return (
        <div className="mb-4">
                <input type="text"
                    placeholder="Search venues.." 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
    )


}

export default SearchVenue;