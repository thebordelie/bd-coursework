import { NavLink } from "@remix-run/react";

const NavbarInner = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-around items-center">
				<div>
					<NavLink to="/profile" className={ ({ isActive }) => 
						isActive ? "text-white font-bold" : "text-white"}>
              Профиль
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
  
export default NavbarInner;