import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<div className="nav-container">
				<Link className="logo-link" to="/">
					<h>DANIELLE FONG</h>
				</Link>
				<div className="link-wrapper">
					<Link className="nav-link" to="/">
						<h2>Home</h2>
					</Link>
					<Link className="nav-link" to="/Projects">
						<h2>Projects</h2>
					</Link>
					<Link className="nav-link" to="/Other">
						<h2>Other</h2>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Nav;