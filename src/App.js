import "./App.css";
import Homepage from "./website/Homepage";
import Projects from "./website/Projects";
import Other from "./website/Other";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/how-it-works" exact component={Projects} />
					<Route path="/about" exact component={Other} />
				</Switch>
			</Router>
		</>
	);
};

export default App;

