import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);
	const reset = () => setCount(0);

	return (
		<div>
			<h2> {count} </h2>
			<Stack direction="row" spacing={2}>
				<Button
					variant="outlined"
					className="counter-Button"
					onClick={decrease}>
					-
				</Button>
				<Button
					variant="outlined"
					className="counter-Button"
					onClick={increase}>
					+
				</Button>
				<Button variant="outlined" className="counter-Button" onClick={reset}>
					Reset
				</Button>
			</Stack>
		</div>
	);
};

export default Counter;
