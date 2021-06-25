import "./App.css";
import Homepage from "./website/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
					<Route path="/" exact component={Homepage} />
			</Router>
		</>
	);
};

export default App;

