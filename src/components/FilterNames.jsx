import { useState, useEffect } from "react";
import names from "../data/names";
import {
	Select,
	MenuItem,
	TextField,
	Box,
	Stack,
	Typography,
} from "@mui/material";

const FilterNames = () => {
	// state variables
	const [genderFilter, setGenderFilter] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredNames, setFilteredNames] = useState(names);

	useEffect(() => { // will run every time genderFilter or searchQuery changes
		setFilteredNames(
			names.filter(
				(person) =>
					(genderFilter === "all" || person.gender === genderFilter) &&
					person.name.toLowerCase().includes(searchQuery.toLowerCase())
			)
		); // filter the names array based on the genderFilter and searchQuery
	}, [genderFilter, searchQuery]);

	return (
		<>
			<Stack direction="row" spacing={2} sx={{ marginBottom: "20px" }}>
				<Select
					className="dropdown-menu"
					value={genderFilter}
					onChange={(e) => setGenderFilter(e.target.value)}>
					<MenuItem value="all">All</MenuItem>
					<MenuItem value="male">Male</MenuItem>
					<MenuItem value="female">Female</MenuItem>
				</Select>
				<TextField
					type="text"
					className="search-input"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Filter names"
				/>
			</Stack>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					gap: 1,
				}}>
				{filteredNames.map((person, index) => (
					<Typography key={index} variant="body2" component="span" className={person.className}>
						{person.name}
					</Typography>
				))}
			</Box>
		</>
	);
};

export default FilterNames;
