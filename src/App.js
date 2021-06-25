import "./App.css";
import Homepage from "./website/Homepage";

const App = () => {
	return (
		<>
			<Router>
					<Route path="/" exact component={Home} />
			</Router>
		</>
	);
};

export default App;

