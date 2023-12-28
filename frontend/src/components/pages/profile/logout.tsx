import { useNavigate } from "@remix-run/react";

const LogoutButton = () => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => {
				navigate("/logout");
			}}
			className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
		>
			Выйти
		</button>

	);
};
  
export default LogoutButton;