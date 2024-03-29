import { useState } from "react";
import Counter from "./Counter";
import FilterNames from "./FilterNames";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Navigation = () => {
	const [currentPage, setCurrentPage] = useState("home"); // state variable

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				height: "100vh",
			}}>
			<Stack direction="row" spacing={2} sx={{ marginTop: "20px", marginBottom: "200px" }}>
				<Button color="secondary" onClick={() => setCurrentPage("home")} sx={ {fontWeight: "bold"}}>
					Home
				</Button>
				<Button color="secondary" onClick={() => setCurrentPage("counter")} sx={ {fontWeight: "bold"}}>
					Counter Example
				</Button>
				<Button color="secondary" onClick={() => setCurrentPage("names")} sx={ {fontWeight: "bold"}}>
					Filtering Example
				</Button>
			</Stack>
			{currentPage === "home" && (
				<>
					<Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: "bold", color: "#00bfff" }}>
					Reactive variables!
					</Typography>
					<Typography variant="body1" sx={{ fontWeight: "bold", color: "#00bfff" }}>
					Pick an example!
					</Typography>
				</>
			)}
			{currentPage === "counter" && <Counter />}
			{currentPage === "names" && <FilterNames />}
		</Box>
	);
};

export default Navigation;
