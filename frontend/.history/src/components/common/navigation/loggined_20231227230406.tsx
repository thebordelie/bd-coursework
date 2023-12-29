import { NavLink } from "@remix-run/react";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<NavLink to="/" className="text-white text-lg font-bold">
              Home
					</NavLink>
				</div>
  
				<div className="space-x-4">
					<NavLink to="/about" className="text-white">
              About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
  
export default Navbar;