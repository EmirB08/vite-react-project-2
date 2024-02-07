import { useState } from "react";
import { Stack, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);
	const reset = () => setCount(0);

	return (
		<div>
			<Typography
				variant="h4"
				component="h1"
				gutterBottom
				sx={{
					fontSize: "3rem",
					textAlign: "center",
					color: "#00bfff",
					width: "100%",
				}}>
				{count}
			</Typography>

			<Stack direction="row" spacing={2}>
				<IconButton color="secondary" onClick={decrease}>
					<RemoveIcon />
				</IconButton>
				<IconButton color="secondary" onClick={increase}>
					<AddIcon />
				</IconButton>
				<IconButton color="secondary" onClick={reset}>
					<RestartAltIcon />
				</IconButton>
			</Stack>
		</div>
	);
};

export default Counter;
