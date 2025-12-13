
export interface IVenueSearchProps{
    onSearch: (search: string) => void;
    placeholder?: string
}

const SearchVenue = ({onSearch, placeholder}: IVenueSearchProps) => {
    return (
        <div className="mb-4">
                <input type="text"
                    placeholder={placeholder || "Search..."}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
    )


}

export default SearchVenue;