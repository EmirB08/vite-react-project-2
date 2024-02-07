import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./components/Navigation";
import MainContainer from "./components/MainContainer";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<MainContainer>
				<Navigation />
			</MainContainer>
		</ThemeProvider>
	);
};

export default App;
