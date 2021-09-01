import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "./logo.png"

const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Link className="logo-link" to="/">
					<img className="logo" src={logo}/>
				</Link>
				<div className="link-wrapper">
					<Link className="nav-link" to="/">
						<h2>Home</h2>
					</Link>
					<Link className="nav-link" to="/About">
						<h2>About</h2>
					</Link>
					<Link className="nav-link" to="/Projects">
						<h2>Projects</h2>
					</Link>
					<Link className="nav-link" to="/Extracurriculars">
						<h2>Extracurriculars</h2>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Nav;