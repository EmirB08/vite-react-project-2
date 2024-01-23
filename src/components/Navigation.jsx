import { useState } from "react";
import Counter from "./Counter";
// will import Names component later

const Navigation = () => {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div>
            <div>
                <button onClick={() => setCurrentPage("counter")}>Go to Counter App</button>
                <button onClick={() => setCurrentPage("names")}>Go to Names App</button>
            </div>

            {currentPage === "counter" && <Counter />}
            {currentPage === "names" && <div>Placeholder</div>}
            {currentPage === "home"}
        </div>
    );
};

export default Navigation;

