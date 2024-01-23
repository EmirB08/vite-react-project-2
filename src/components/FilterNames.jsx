import { useState, useEffect } from "react";
import names from "../data/names";

const FilterNames = () => { // state variables
    const [genderFilter, setGenderFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredNames, setFilteredNames] = useState(names);

    useEffect(() => { // will run every time genderFilter or searchQuery changes
    setFilteredNames(names.filter(person =>
    (genderFilter === "all" || person.gender === genderFilter) &&
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
    )); // filter the names array based on the genderFilter and searchQuery
    }, [genderFilter, searchQuery]);

return (
    <div>
        <select className="dropdown-menu" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}> 
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
        <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search names..."
        />
    <ul>
        {filteredNames.map((person, index) => <li key={index}>{person.name}</li>)}
    </ul>
    </div>
);
};

export default FilterNames;

