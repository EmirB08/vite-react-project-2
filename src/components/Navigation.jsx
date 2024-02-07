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
				<Button variant="outlined" onClick={() => setCurrentPage("home")}>
					Home
				</Button>
				<Button variant="outlined" onClick={() => setCurrentPage("counter")}>
					Counter Example
				</Button>
				<Button variant="outlined" onClick={() => setCurrentPage("names")}>
					Filtering Example
				</Button>
			</Stack>
			{currentPage === "home" && (
				<>
					<Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "primary.main" }}>
						Reactive variables!
					</Typography>
					<Typography variant="body1" sx={{ fontWeight: "bold" }}>
					Just a small project showcasing use of reactive variables. Pick an example!
					</Typography>
				</>
			)}
			{currentPage === "counter" && <Counter />}
			{currentPage === "names" && <FilterNames />}
		</Box>
	);
};

export default Navigation;
