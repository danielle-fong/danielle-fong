import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Link className="homepage-link" to="/">
				</Link>
				<div className="link-wrapper">
					<Link className="nav-link" to="/">
						<h2>Homepage</h2>
					</Link>
					<Link className="nav-link" to="/about">
						<h2>Projects</h2>
					</Link>
					<Link className="nav-link" to="/how-it-works">
						<h2>Other</h2>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Nav;