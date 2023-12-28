import { NavLink } from "@remix-run/react";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-around items-center">
				<div>
					<NavLink to="/" className={ ({ isActive }) => 
						isActive ? "text-white font-bold" : "text-white"}>
              Home
					</NavLink>
				</div>
  
				<div className="space-x-4">
					<NavLink to="/login" className={ ({ isActive }) => 
						isActive ? "text-white font-bold" : "text-white"}>
              About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
  
export default Navbar;