import { Link } from "@remix-run/react";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<Link to="/" className="text-white text-lg font-bold">
              Home
					</Link>
				</div>
  
				<div className="space-x-4">
					<a href="/about" className="text-white">
              About
					</a>
				</div>
			</div>
		</nav>
	);
};
  
export default Navbar;