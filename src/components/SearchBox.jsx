import { useState } from "react";
import "./SearchBox.css";

function SearchBox({onSearch}) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){
            onSearch(city);
            setCity("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-box">
            <input
             type="text"
             placeholder="Enter city"
             value={city}
             onChange={(e) => setCity(e.target.value)}
             />
             <button type="submit">Search</button>
        </form>
    )
}