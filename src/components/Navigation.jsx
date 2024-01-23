import { useState } from "react";
import Counter from "./Counter";
import FilterNames from "./FilterNames";

const Navigation = () => {
    const [currentPage, setCurrentPage] = useState("home"); // state variable

    return (
        <div >
            <div className="navigation-bar">
                <button onClick={() => setCurrentPage("home")}>Home</button>
                <button onClick={() => setCurrentPage("counter")}>Counter Example</button>
                <button onClick={() => setCurrentPage("names")}>Filtering Example</button>
                
            </div>
            {currentPage === "home" && <div>Just a small project showcasing some examples of using UseState. Pick an example!</div>}
            {currentPage === "counter" && <Counter />}
            {currentPage === "names" && <FilterNames />}
        </div>
    );
};

export default Navigation;
