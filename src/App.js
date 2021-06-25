import "./App.css";
import Home from "./website/pages/Home";
import Projects from "./website/pages/Projects";
import Other from "./website/pages/Other";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./website/Nav";

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Projects" exact component={Projects} />
					<Route path="/Other" exact component={Other} />
				</Switch>
			</Router>
		</>
	);
};

export default App;

