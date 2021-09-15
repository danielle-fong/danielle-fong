import "./App.css";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Projects from "./website/pages/Projects";
import Extracurriculars from "./website/pages/Extracurriculars";
import Nav from "./website/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/About" exact component={About} />
					<Route path="/Projects" exact component={Projects} />
					<Route path="/Extracurriculars" exact component={Extracurriculars} />
				</Switch>
			</Router>
		</>
	);
};

export default App;

